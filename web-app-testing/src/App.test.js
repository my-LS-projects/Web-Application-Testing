import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react"
import App from './App';
import Display from "./components/Display"


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  render(<App />)
})