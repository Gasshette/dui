import React from 'react';
import * as ReactDOM from 'react-dom';
import { BasicMedium as Chip } from '../stories/Chip/chip.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chip />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
