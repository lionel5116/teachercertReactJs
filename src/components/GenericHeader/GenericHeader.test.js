import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import GenericHeader from './GenericHeader';

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

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenericHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders with some header text", () => {

  act(() => {
    render(<GenericHeader headertext="Login Screen Test" />, container);
  });
  expect(container.textContent).toBe("Login Screen Test");

});
