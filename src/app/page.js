import React from 'react';
import TodoList from '@/components/todoList';

export default function Home() {
  return (
    <main className="md:w-[40vw] container mx-auto flex-1">
      {/* Todo app component: contains add todo input and todo list display */}
      <TodoList data-testid="todoList" />
    </main>
  );
}
