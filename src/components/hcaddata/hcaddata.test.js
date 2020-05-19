import React from 'react';
import ReactDOM from 'react-dom';
import hcaddata from './hcaddata';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<hcaddata />, div);
  ReactDOM.unmountComponentAtNode(div);
});