import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoDisplay from '../todoDisplay';

test('render todos', () => {
  const todos = [
    { id: '1', text: 'the one', completed: false, all: true },
    { id: '2', text: 'another one', completed: true, all: true },
    { id: '3', text: 'a new one', completed: false, all: true },
  ];
  render(<TodoDisplay todos={todos} />);

  const allButton = screen.getByTestId('allTodos');
  const activeButton = screen.getByTestId('activeTodos');
  const completedButton = screen.getByTestId('completedTodos');

  //rendering all todos when page loads
  expect(screen.queryByText('the one')).toBeInTheDocument();
  expect(screen.queryByText('another one')).toBeInTheDocument();
  expect(screen.queryByText('a new one')).toBeInTheDocument();

  //rendering completed todos
  fireEvent.click(completedButton);

  expect(screen.queryByText('the one')).not.toBeInTheDocument();
  expect(screen.queryByText('another one')).toBeInTheDocument();
  expect(screen.queryByText('a new one')).not.toBeInTheDocument();

  //rendering active todos
  fireEvent.click(activeButton);
  expect(screen.queryByText('the one')).toBeInTheDocument();
  expect(screen.queryByText('another one')).not.toBeInTheDocument();
  expect(screen.queryByText('a new one')).toBeInTheDocument();

  //rendering all todos when all button is clicked
  fireEvent.click(allButton);

  expect(screen.queryByText('the one')).toBeInTheDocument();
  expect(screen.queryByText('another one')).toBeInTheDocument();
  expect(screen.queryByText('a new one')).toBeInTheDocument();
});
