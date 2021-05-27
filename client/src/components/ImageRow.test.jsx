import React from 'react';
import renderer from 'react-test-renderer';
import ImageRow from './ImageRow';

it('renders correctly', () => {
  const tree = renderer
    .create(<ImageRow images={['Image1', 'Image2', 'Image3']} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});