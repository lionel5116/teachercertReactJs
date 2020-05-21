import React from 'react';
import ReactDOM from 'react-dom';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Reusablebutton from './reusablebutton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reusablebutton />, div);
  ReactDOM.unmountComponentAtNode(div);
});


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with the type button and variant warning", () => {

  /*
  act(() => {
    render(<Reusablebutton type="button" />, container);
  });
  expect(container.type).toBe("button");
 */
  
  act(() => {
    render(<Reusablebutton variant="warning" />, container);
  });
  expect(container.variant).toBe("warning");
  
});
