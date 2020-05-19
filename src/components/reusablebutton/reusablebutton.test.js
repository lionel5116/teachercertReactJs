import React from 'react';
import ReactDOM from 'react-dom';
import reusablebutton from './reusablebutton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<reusablebutton />, div);
  ReactDOM.unmountComponentAtNode(div);
});