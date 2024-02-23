import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all the expeditions', async () => {
  render(<App />);
  const expeditions = await screen.findAllByTestId(/expedition-item-/i)
  expect(expeditions.length).toBe(3)
});
