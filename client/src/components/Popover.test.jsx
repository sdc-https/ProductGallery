import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, waitFor, fireEvent, render, queryHelpers, buildQueries} from '@testing-library/react';
import Popover from './Popover';

afterEach(cleanup);

it('renders correctly', () => {
  const tree = renderer
    .create(<Popover
      images={[1, 2, 3]}
      visible={true}
      name={'test'}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('is invisible when passed visible=false', () => {
  const {container} = render(
    <Popover
      images={[1, 2, 3]}
      visible={false}
      name={'test'}
    />
  );
  const overlay = container.querySelector('.overlay');
  expect(overlay).toBeNull();
});

it('changes image when imageList is clicked', () => {
  const closeHandler = jest.fn();
  const {container} = render(
    <Popover
      images={[1, 2, 3]}
      closeHandler={closeHandler}
      visible={true}
      name={'test'}
    />
  );
  const image = container.querySelector('.largeImage img');
  expect(image.getAttribute('src')).toBe('1');
  const image1 = container.querySelector('[data-index="0"]');
  const image2 = container.querySelector('[data-index="1"]');
  fireEvent.click(image2);
  expect(image.getAttribute('src')).toBe('2');
});

/*
This may need to be in app.jsx...?

it('closes popover when close button is pressed', async () => {
  const closeHandler = jest.fn();
  const {container} = render(
    <Popover
      images={[1, 2, 3]}
      closeHandler={closeHandler}
      visible={true}
      name={'test'}
    />
  );
  const close = container.querySelector('.popoverClose');
  fireEvent.click(close);
  await waitFor(() => {
    const overlay = container.querySelector('.overlay');
    expect(overlay).not.toBeInTheDocument();
  });
});
*/