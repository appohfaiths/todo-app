import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoDisplay from '../todoDisplay';

// describe('Todos rendering tests', () => {
//   test('should display all todos', () => {
//     const { getByTestId } = render(<TodoDisplay />);
//     const todoDisplay = getByTestId(
//       'todoDisplay',
//       expect(todoDisplay).toBeInTheDocument()
//     );
//   });
// });

test('see all todos', () => {
  render(<TodoDisplay />);

  // screen.debug();
  // expect(screen.getByTestId('todoDisplay'));
  screen.getByRole('');
});
