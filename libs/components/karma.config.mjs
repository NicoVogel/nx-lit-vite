/** @type {(config: import("karma").Config) => Promise<void> | undefined} */
export default function (config) {
  config.set({
    plugins: [
      'karma-spec-reporter',
      'karma-vite',
      'karma-jasmine',
      'karma-webkit-launcher',
      'karma-chrome-launcher',
    ],
    captureTimeout: 3000,
    frameworks: ['vite', 'jasmine'],
    browsers: ['WebkitHeadless'],
    reporters: ['spec'],
    files: [
      {
        pattern: 'src/**/*.spec.ts',
        type: 'module',
        watched: false,
        served: false,
      },
    ],
  });
}
