import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Todo App tests', () => {
  if (
    ('should render the todo list app',
    () => {
      render(<Home />);
      const todolist = screen.getByTestId(
        'todoList',
        expect(todolist).toBeInTheDocument()
      );
    })
  );
});
