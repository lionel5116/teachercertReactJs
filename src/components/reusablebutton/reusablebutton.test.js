import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import Reusablebutton from './reusablebutton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reusablebutton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//npm install --save-dev react-test-renderer
describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Reusablebutton />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});

