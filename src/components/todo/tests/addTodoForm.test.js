import React from 'react';
import { render, screen } from '@testing-library/react';
import AddTodo from '../addTodoForm';

test('add a new todo', () => {
  render(<AddTodo />);

  screen.getByRole('textbox');
});
