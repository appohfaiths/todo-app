import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditTodoForm from '../editTodoForm';
import useTodoState from '@/utilities/hooks/useTodoState';

jest.mock('@/utilities/hooks/useTodoState');

test('edit an existing todo', () => {
  const editTodoMock = jest.fn();
  const toggleTodoMock = jest.fn();

  useTodoState.mockReturnValue({
    editTodo: editTodoMock,
    toggleTodo: toggleTodoMock,
  });

  render(
    <EditTodoForm
      editTodo={editTodoMock}
      id={1}
      text="original todo text"
      toggleEditForm={toggleTodoMock}
    />
  );

  const input = screen.getByTestId('editTodoInput');
  const editTodoForm = screen.getByTestId('editTodoForm');
  const editedTodoText = 'edited todo text';

  fireEvent.change(input, { target: { value: editedTodoText } });
  fireEvent.submit(editTodoForm);

  expect(editTodoMock).toHaveBeenCalledTimes(1);
  expect(editTodoMock).toHaveBeenCalledWith(1, editedTodoText);
  expect(toggleTodoMock).toHaveBeenCalledTimes(1);
});
