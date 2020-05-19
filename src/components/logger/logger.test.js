import React from 'react';
import ReactDOM from 'react-dom';
import logger from './logger';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<logger />, div);
  ReactDOM.unmountComponentAtNode(div);
});