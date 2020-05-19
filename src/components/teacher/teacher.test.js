import React from 'react';
import ReactDOM from 'react-dom';
import teacher from './teacher';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<teacher />, div);
  ReactDOM.unmountComponentAtNode(div);
});