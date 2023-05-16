import React from 'react';
import { useEffect, useState } from 'react';
import TodoItem from './todoItem';

export default function TodoDisplay({
  todos,
  deleteTodo,
  toggleTodo,
  editTodo,
}) {
  const [theTodos, setTheTodos] = useState([]);

  useEffect(() => {
    setTheTodos(todos);
  }, [todos]);

  return (
    <div data-testid="todoDisplay">
      {theTodos ? (
        <div className="">
          {theTodos.map((todo, i) => (
            <TodoItem
              {...todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
