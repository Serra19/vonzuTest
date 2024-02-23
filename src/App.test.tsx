import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders all the expeditions', async () => {
  render(<App />);
  const expeditions = await screen.findAllByTestId(/expedition-item-/i)
  expect(expeditions.length).toBe(3)
});

test('can search for an expedition by its reference', async () => {
  render(<App />)

  const searchInput = screen.getByTestId("searchInput")
  userEvent.type(searchInput, "0675IVKYM8HNS")

  const expeditions = await screen.findAllByTestId(/expedition-item-/i)
  expect(expeditions.length).toBe(1)
})

test("can search for an expedition by its client username", async () => {
  render(<App />)

  const searchInput = screen.getByTestId("searchInput")
  userEvent.type(searchInput, "martipol")

  const expeditions = await screen.findAllByTestId(/expedition-item-/i)
  expect(expeditions.length).toBe(2)
})

test('can sort the expeditions by updatedAt and change order', async () => {
  render(<App />)

  const sortByMenu = await screen.findByTestId("sortBy")
  userEvent.click(sortByMenu)

  const sortButton = await screen.findByTestId("sortBy-updatedAt")
  userEvent.click(sortButton)

  const expeditions = await screen.findAllByTestId(/expedition-item-/i)
  expect(expeditions[0]).toHaveTextContent("101885")
  expect(expeditions[1]).toHaveTextContent("101881")
  expect(expeditions[2]).toHaveTextContent("101878")

  const orderButton = await screen.findByTestId("orderButton")
  userEvent.click(orderButton)
  
  const expeditionsOrdered = await screen.findAllByTestId(/expedition-item-/i)
  expect(expeditionsOrdered[0]).toHaveTextContent("101881")
  expect(expeditionsOrdered[1]).toHaveTextContent("101878")
  expect(expeditionsOrdered[2]).toHaveTextContent("101885")
})