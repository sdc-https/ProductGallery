import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, waitFor, waitForElementToBeRemoved, fireEvent, render, queryHelpers, buildQueries, screen} from '@testing-library/react';
import Gallery from './Gallery';

it('renders correctly', () => {
  const mock = jest.fn();
  const tree = renderer
    .create(<Gallery
      images={[1, 2, 3]}
      openHandler={mock}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('passes click fn to image', () => {
  const mock = jest.fn();
  const {container} = render(
    <Gallery
      images={[1, 2, 3]}
      openHandler={mock}
    />
  );
  const img = container.querySelector('img');
  fireEvent.click(img);
  expect(mock).toHaveBeenCalledTimes(1);
});

it('changes main image to match hovered-over image', () => {
  const {container} = render(
    <Gallery
      images={[1, 2, 3]}
    />
  );
  const img = container.querySelector('img');
  expect(img.getAttribute('src')).toBe('1');

  const thumb = container.querySelector('ul').children[1];
  fireEvent.mouseEnter(thumb);
  expect(img.getAttribute('src')).toBe('2');
});

it('does nothing when thumbnails are clicked', () => {
  const {container} = render(
    <Gallery
      images={[1, 2, 3]}
    />
  );
  const img = container.querySelector('img');
  expect(img.getAttribute('src')).toBe('1');
  const thumb = container.querySelector('ul').children[1];
  fireEvent.click(thumb);
  expect(container).toMatchSnapshot();
  expect(img.getAttribute('src')).toBe('1');
});