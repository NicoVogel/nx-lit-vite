import {Config} from 'karma';

export default (config: Config) => {
  config.set({
    plugins: ['karma-vite', 'karma-jasmine', 'karma-chrome-launcher'],
    frameworks: ['vite', 'jasmine'],
    browsers: ['Chrome'],
    files: [
      {
        pattern: 'src/**/*.spec.ts',
        type: 'module',
        watched: false,
        served: false,
      },
    ],
  });
};
