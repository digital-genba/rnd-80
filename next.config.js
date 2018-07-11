const withTypescript = require('@zeit/next-typescript');
const fp = require('lodash/fp');

module.exports = fp.compose(withTypescript)({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
});
