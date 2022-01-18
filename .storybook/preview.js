// import '../styles/global.scss';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        color: '#FFF',
      },
      {
        name: 'secondary',
        value: '#3d3d3d',
      },
      {
        name: 'primary',
        value: '#53d69a',
      },
    ],
  },
};
