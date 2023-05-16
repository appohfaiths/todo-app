import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';

test('should render the todo list app', () => {
  render(<Home />);
  screen.debug();
});
