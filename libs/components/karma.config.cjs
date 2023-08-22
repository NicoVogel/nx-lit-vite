const path = require('path');
const dir = 'libs/components';
const absoluteModulePath = path.resolve(dir, 'karma.config.mjs');

process.env.NO_PROXY = process.env.no_proxy =
  'localhost, 0.0.0.0/4201, 0.0.0.0/9876';

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
