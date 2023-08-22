const path = require('path');
const dir = 'libs/components';
const absoluteModulePath = path.resolve(dir, 'karma.config.mjs');

// why this is needed: https://github.com/karma-runner/karma/issues/3677
module.exports = function (config) {
  return import('file:' + absoluteModulePath).then(function (retrievedModule) {
    const defaultExport =
      typeof retrievedModule?.default !== 'undefined'
        ? retrievedModule.default
        : retrievedModule;
    if (typeof defaultExport === 'function') {
      return defaultExport(config);
    }
  });
};
