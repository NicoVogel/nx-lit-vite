import type {StorybookConfig} from '@storybook/web-components-vite';
import {getViteSharedConfig} from '../tools/scripts/vite-shared';
import packageJson from '../package.json';

const config: StorybookConfig = {
  stories: ['../libs/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@geometricpanda/storybook-addon-badges',
  ],
  framework: '@storybook/web-components-vite',
  features: {
    buildStoriesJson: true,
  },
  viteFinal: config => {
    const shared = getViteSharedConfig(packageJson);
    config.define = {...config.define, ...shared.define};
    return config;
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
