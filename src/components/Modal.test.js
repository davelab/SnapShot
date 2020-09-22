import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Modal from './Modal';


test('modal is not showing', () => {
  render(<Modal />);
  expect(screen.queryByTestId('modal-overlay')).toBeNull();
});

test('modal is  showing', () => {
  render(<Modal isShowing />);
  expect(screen.getByTestId('modal-overlay')).toBeInTheDocument();
});

test('modal close function has been called', () => {
  const hide = jest.fn(() => null);

  render(<Modal isShowing hide={hide} />);
  fireEvent.click(screen.getByTestId('close-button'));
  expect(hide.mock.calls.length).toBe(1);
});
