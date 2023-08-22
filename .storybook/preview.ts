import type {Preview} from '@storybook/web-components';

const preview: Preview = {
  parameters: {
    badges: ['version', 'commit'],
    badgesConfig: {
      version: {
        title: `Version: ${import.meta.env.VERSION}`,
        styles: {
          backgroundColor: '#FFF',
          boarderColor: '#018786',
          color: '#018786',
        },
      },
      commit: {
        title: `Commit: ${import.meta.env.COMMIT}`,
        styles: {
          backgroundColor: '#FFF',
          boarderColor: '#6200EE',
          color: '#6200EE',
        },
      },
    },
  },
};

export default preview;
