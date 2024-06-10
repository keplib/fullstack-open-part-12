/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Todo from '../Todos/Todo';

describe('Todo: not done', () => {
  const todo = {
    text: 'New todo',
    done: false,
  };

  var container;
  var mockDeleteTodo;
  var mockCompleteTodo;

  beforeEach(() => {
    mockDeleteTodo = jest.fn();
    mockCompleteTodo = jest.fn();
    container = render(<Todo todo={todo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />).container;
  });

  test('Everything is rendered', async () => {
    expect(screen.getByText('New todo')).toBeDefined();
    expect(screen.getByText('This todo is not done')).toBeDefined();
    expect(screen.getByText('Delete')).toBeDefined();
    expect(screen.getByText('Set as done')).toBeDefined();
  });
});
