import React from 'react';
import ReactDOM from 'react-dom';

import Reusablebutton from './reusablebutton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reusablebutton />, div);
  ReactDOM.unmountComponentAtNode(div);
});




