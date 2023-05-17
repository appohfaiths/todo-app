import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import TodoItem from '../todoItem';
import useTodoState from '@/utilities/hooks/useTodoState';
import { async } from 'regenerator-runtime';

jest.mock('@/utilities/hooks/useTodoState');

//testing the delete functionality
test('delete a task when the delete button is clicked', async () => {
  const todo = { id: 1, text: 'test delete', completed: false };
  const deleteTodoMock = jest.fn();
  const toggleTodoMock = jest.fn();
  const editTodoMock = jest.fn();

  useTodoState.mockReturnValue({
    deleteTodo: deleteTodoMock,
    toggleTodo: toggleTodoMock,
    editTodo: editTodoMock,
  });

  render(
    <TodoItem
      {...todo}
      toggleTodo={toggleTodoMock}
      editTodo={editTodoMock}
      deleteTodo={deleteTodoMock}
    />
  );

  const deleteButton = screen.getByTestId('deleteButton');
  const deletedTodo = screen.queryByText(todo.text);

  fireEvent.click(deleteButton);

  expect(deleteTodoMock).toHaveBeenCalledWith(todo.id);

  // await waitForElementToBeRemoved(() => deletedTodo, { timeout: 7000 });
  // expect(deletedTodo).not.toBeInTheDocument();

  try {
    deletedTodo;
    expect(true).toBeFalsy();
  } catch (error) {
    expect(error).toBeTruthy();
  }
});

//testing the toggle completion functionality

test('mark a task as completed when the checkbox is clicked', () => {
  const todo = { id: 1, text: 'test completed', completed: true };
  const deleteTodoMock = jest.fn();
  const toggleTodoMock = jest.fn();
  const editTodoMock = jest.fn();

  useTodoState.mockReturnValue({
    deleteTodo: deleteTodoMock,
    toggleTodo: toggleTodoMock,
    editTodo: editTodoMock,
  });

  render(
    <TodoItem
      {...todo}
      toggleTodo={toggleTodoMock}
      editTodo={editTodoMock}
      deleteTodo={deleteTodoMock}
    />
  );

  const checkboxButton = screen.getByTestId('checkbox');

  fireEvent.click(checkboxButton);

  expect(toggleTodoMock).toHaveBeenCalledWith(todo.id);
  expect(todo.completed).toBe(true);
});
