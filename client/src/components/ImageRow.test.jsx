import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render, queryHelpers, buildQueries, screen} from '@testing-library/react';
import ImageRow from './ImageRow';

afterEach(cleanup);

it('renders correctly', () => {
  const tree = renderer
    .create(<ImageRow images={[0, 1, 2]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('sets selected image by passed prop', () => {
  const {container} = render(<ImageRow images={[0, 1, 2]} selected={2} />);
  const image1 = container.querySelector('[data-index="0"]');
  const image3 = container.querySelector('[data-index="2"]');

  expect(image1.className).toBe('');
  expect(image3.className).toBe('selected');
});

it('renders if no props are passed in', () => {
  const tree = renderer
    .create(<ImageRow />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('caps images to 4', () => {
  const {container} = render(<ImageRow images={[0, 1, 2, 3, 4]} />);
  const image1 = container.querySelector('[data-index="0"]');
  const image5 = container.querySelector('[data-index="4"]');

  expect(image1).not.toBeNull();
  expect(image5).toBeNull();
});

it('passes mouseevents to the images', () => {
  const mouseevent = jest.fn();

  const {container} = render(
    <ImageRow
      images={[0, 1, 2]}
      clickHandler={mouseevent}
      mouseHandler={mouseevent}
    />
  );

  const image1 = container.querySelector('[data-index="0"]');

  fireEvent.mouseEnter(image1);
  fireEvent.click(image1);

  expect(mouseevent).toHaveBeenCalledTimes(2);
});
