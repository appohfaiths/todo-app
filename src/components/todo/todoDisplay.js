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
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    setTheTodos(todos);
  }, [todos]);

  useEffect(() => {
    filterTodos();
  }, [todos, filterType]);

  const filterTodos = () => {
    let filteredTodos = theTodos;

    if (filterType === 'all') {
      filteredTodos = todos.filter((todo) => todo.all);
    } else if (filterType === 'completed') {
      filteredTodos = todos.filter((todo) => todo.completed);
    } else if (filterType === 'incomplete') {
      filteredTodos = todos.filter((todo) => !todo.completed);
    }

    setTheTodos(filteredTodos);
  };

  return (
    <>
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
      <div className="flex items-center justify-around py-4 border-2 rounded-lg">
        <button data-testid="allTodos" onClick={() => setFilterType('all')}>
          All
        </button>
        <button
          data-testid="activeTodos"
          onClick={() => setFilterType('incomplete')}
        >
          Active
        </button>
        <button
          data-testid="completedTodos"
          onClick={() => setFilterType('completed')}
        >
          Completed
        </button>
      </div>
    </>
  );
}
