'use client';

import { useEffect } from 'react';
import TodoList from '@/components/todo/todolist';
import AddTodo from '@/components/todo/addTodoForm';
import useTodoState from '../utilities/hooks/useTodoState';

export default function Home() {
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = useTodoState();

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
    console.log(JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="md:w-[40vw] bg-slate-500 container mx-auto">
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </main>
  );
}
