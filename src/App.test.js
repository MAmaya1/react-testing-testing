import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('<App/>', () => {
  it('should render without crashing', () => {
    render(<App/>);
  });

  it('should match snapshot', () => {
    const tree = render(<App/>);
    expect(tree).toMatchSnapshot();
  })
})

it('should render an element with the test "Hello There!"', () => {
  const wrapper = render(<App/>);
  const element =  wrapper.queryByText(/hello there/);

  expect(element).toBeInTheDocument();
})

