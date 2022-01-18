module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // 'storybook-addon-sass-postcss',
    // {
    //   name: 'storybook-addon-sass-postcss',
    //   options: {
    //     sassLoaderOptions: {
    //       implementation: require('sass'),
    //     },
    //   },
    // },
    // '@storybook/preset-scss',
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     sassLoaderOptions: {
    //       implementation: require('sass'),
    //     },
    //   },
    // },
  ],

  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
