import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, waitFor, waitForElementToBeRemoved, fireEvent, render, queryHelpers, buildQueries, screen} from '@testing-library/react';
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
  const {container} = render(
    <Popover
      images={[1, 2, 3]}
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

it('passes close function to closebutton', async () => {
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
  expect(closeHandler).toHaveBeenCalledTimes(1);
});

it('doesn\'t crash when user moves mouse over main-image', () => {
  const {container} = render(
    <Popover
      images={[1, 2, 3]}
      visible={true}
      name={'test'}
    />
  );
  const image = container.querySelector('.largeImage img');
  fireEvent.mouseMove(image);
});

it('toggles image zoom / pan', () => {
  const {container, rerender} = render(
    <Popover
      images={[1, 2, 3]}
      visible={true}
      name={'test'}
    />
  );
  let image = container.querySelector('.largeImage');
  //test clicking when image is 'non-zoomable'
  expect(image.classList).not.toContain('zoomable');
  fireEvent.click(image);
  //setup for test
  rerender(<Popover
    images={[1, 2, 3]}
    visible={true}
    name={'test'}
    test={true}
  />);
  fireEvent.mouseMove(image);
  expect(image.classList).toContain('zoomable');
  expect(image.classList).not.toContain('zoomed');
  fireEvent.click(image);
  expect(image.classList).toContain('zoomed');
  fireEvent.click(image);
  expect(image.classList).not.toContain('zoomed');
});