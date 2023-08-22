import {resolve} from 'node:path';

import {Viewport, Config, Scenario} from 'backstopjs';

const basePath = '/tmp';

export const config = {
  user: {
    blacklistStories: [] as string[],
    misMatchThresholdInPercentage: 0.1,
  },
  buildProcess: {
    locations: {
      referenceBuild: resolve(basePath, 'reference'),
      referenceServePort: 8080,
      changedServePort: 8080,
    },
  },
  backstopCapture: {
    id: 'vr',
    scenarioDefault: {
      selectorExpansion: true,
      requireSameDimensions: true,
    } satisfies Partial<Scenario>,
    viewPorts: [
      {
        height: 1920,
        width: 1080,
        label: 'desktop',
        name: 'desktop',
      },
    ] satisfies Viewport[],
    locations: {
      bitmaps_reference: resolve(basePath, 'backstop_data/bitmaps_reference'),
      bitmaps_test: resolve(basePath, 'backstop_data/bitmaps_test'),
      html_report: resolve(basePath, 'backstop_data/html_report'),
      ci_report: resolve(basePath, 'backstop_data/ci_report'),
    } satisfies Config['paths'],
    scripts: {
      base: 'src/engine_scripts',
      onBeforeScript: 'playwright/onBefore.js',
      onReadyScript: 'playwright/onReady.js',
    },
    browser: {
      report: ['browser' as const, 'CI' as const],
      engine: 'playwright' as const,
      engineOptions: {
        browser: 'chromium' as const,
        args: [],
      },
      asyncCaptureLimit: 3,
      asyncCompareLimit: 50,
      resembleOutputOptions: {
        ignoreAntialiasing: true,
      },
    } satisfies Partial<Config>,
  },
};
