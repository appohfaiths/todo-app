import { render, fireEvent, screen } from '@testing-library/react';
import AddTodo from '../addTodoForm';

test('user should not be able to submit an empty form', () => {
  render(<AddTodo />);

  screen.debug();
});
