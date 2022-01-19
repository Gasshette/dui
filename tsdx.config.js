const styles = require('rollup-plugin-styles');

// Necessary for the "yarn build" to works fine
// running storybook need what's in the main.js (preset-scss and its fancy downgrade)
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins = [styles(), ...config.plugins];
    return config; // always return a config.
  },
};
