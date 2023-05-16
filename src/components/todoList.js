'use client';

import { useEffect } from 'react';
import TodoDisplay from '@/components/todo/todoDisplay';
import AddTodo from '@/components/todo/addTodoForm';
import useTodoState from '../utilities/hooks/useTodoState';

export default function TodoList() {
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = useTodoState();

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
    console.log(JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <TodoDisplay
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </>
  );
}
