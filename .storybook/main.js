module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // css-loader, style-loader and sass-loader need to be downgraded :https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function
    '@storybook/preset-scss',
  ],

  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
