import path from 'path';

import backstop, {Config, Scenario} from 'backstopjs';

import storyJSON from './assets/stories.json';
import {config} from './config.ts';

// Run main
const [, , backstopExecutionMode] = process.argv;
main(backstopExecutionMode);

async function main(backstopExecutionMode: string) {
  const {action, label, location} = getAction(backstopExecutionMode);
  console.log(`task: '${action}' with location: '${location}'`);

  const scenarios = constructScenarios(storyJSON, location);
  console.log(
    'scenarios',
    scenarios.map(({label, url, selectors}) => ({label, url, selectors}))
  );

  const config = constructBackstopConfig(scenarios);
  console.log('backstop config', config);

  backstop(action, {
    config,
  })
    .then(() => {
      console.info(`${label} completed`);
    })

    .catch(err => {
      console.info(`${label} failed, because: `, err);

      process.exit(1);
    });
}

function getAction(mode: string) {
  switch (mode) {
    case 'reference':
      return {
        action: 'reference',
        label: 'referencing',
        location: `http://localhost:${config.buildProcess.locations.referenceServePort}`,
      } as const;
    case 'test':
    default:
      return {
        action: 'test',
        label: 'testing',
        location: `http://localhost:${config.buildProcess.locations.changedServePort}`,
      } as const;
  }
}

/**
 *
 * @param baseUrl should not end with a /
 * @returns
 */
function constructScenarios(stories: typeof storyJSON, baseUrl: string) {
  console.assert(
    baseUrl.endsWith('/'),
    'baseUrl is should not end with a /',
    baseUrl
  );

  return Object.values(stories.stories)
    .filter(
      story =>
        // make sure that the `docs` entries are removed
        story.tags.includes('story') &&
        // make sure that only stories we want are actually included
        !config.user.blacklistStories.includes(story.id)
    )
    .map(entry => {
      const {title, name, id, importPath} = entry;
      const selector = getCustomElementTagFromFileName(importPath);
      if (!selector) {
        console.log(
          'could not get custom element tag from file name for entry: ',
          entry
        );
        return undefined;
      }
      return {
        ...config.backstopCapture.scenarioDefault,
        readySelector: '#root-inner',
        label: `${title} ${name}`,
        // custom url is required to isolate the storybook component in its own frame
        url: `${baseUrl}/iframe.html?viewMode=docs&id=${id}`,
        selectors: [selector],
        misMatchThreshold: config.user.misMatchThresholdInPercentage,
      } satisfies Scenario;
    })
    .filter(defined);
}

function constructBackstopConfig(scenarios: Scenario[]): Config {
  const {base: engine_scripts, ...scripts} = config.backstopCapture.scripts;
  return {
    ...config.backstopCapture.browser,
    ...scripts,
    id: config.backstopCapture.id,
    viewports: config.backstopCapture.viewPorts,
    paths: {
      ...config.backstopCapture.locations,
      engine_scripts,
    },
    scenarios,
  };
}

function getCustomElementTagFromFileName(importPath: string) {
  const fileName = path.basename(importPath);
  if (!fileName.endsWith('.stories.mdx')) {
    // is not a mdx file
    return undefined;
  }

  return fileName.split('.stories.mdx')[0];
}

function defined<T>(x: T | undefined): x is T {
  return Boolean(x);
}
