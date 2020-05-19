import React from 'react';
import ReactDOM from 'react-dom';
import NavbarMain from './NavbarMain';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavbarMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});