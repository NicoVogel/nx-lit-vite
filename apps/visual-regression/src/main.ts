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
        // since version 7, the docs are an overview page and as we are only interested in the stories, we filter them out
        story.tags.includes('story') &&
        // remove blacklisted stories (e.g. loading spinner, what ever is not static)
        !config.user.blacklistStories.includes(story.id)
    )
    .map(entry => {
      const {title, name, id} = entry;
      return {
        ...config.backstopCapture.scenarioDefault,
        // backstop waits for this to appear, before taking the screenshot
        readySelector: '#root-inner',
        label: `${title} ${name}`,
        // custom url is required to isolate the storybook component in its own frame
        url: `${baseUrl}/iframe.html?viewMode=docs&id=${id}`,
        selectors: ['#root-inner'],
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

function defined<T>(x: T | undefined): x is T {
  return Boolean(x);
}
