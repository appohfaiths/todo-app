import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../addTodoForm';
import useTodoState from '@/utilities/hooks/useTodoState';

jest.mock('@/utilities/hooks/useTodoState');

test('add a new todo', () => {
  const addTodoMock = jest.fn();
  useTodoState.mockReturnValue({ addTodo: addTodoMock });

  render(<AddTodo addTodo={addTodoMock} />);

  const input = screen.getByTestId('todoInput');
  const submitButton = screen.getByTestId('submitButton');
  const newTodoText = 'testing the input';

  fireEvent.change(input, { target: { value: newTodoText } });

  fireEvent.click(submitButton);

  expect(addTodoMock).toHaveBeenCalledWith(newTodoText);

  expect(input.value).toBe('');
});
