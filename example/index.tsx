import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chip } from '../src/chip';

const App = () => {
  return (
    <div>
      <Chip text="Example" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
