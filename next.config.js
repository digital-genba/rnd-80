const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');
const fp = require('lodash/fp');

module.exports = fp.compose(withTypescript, withCss)({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
});
