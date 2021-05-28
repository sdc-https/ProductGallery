import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render, queryHelpers, buildQueries, screen} from '@testing-library/react';
import App from './App';
import axios from 'axios';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const data = {
  productId: 1,
  images: [1, 2, 3],
  'product_name': 'test'
};

jest.mock('axios');
axios.get.mockImplementation(() => Promise.resolve(data));

it('should make requests for data', () => {
  const {container} = render(<App />);
  expect(axios.get).toHaveBeenCalledTimes(2);
});