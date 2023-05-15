import { useEffect } from 'react';
import TodoItem from './todoItem';

export default function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  useEffect(() => {
    console.log(todos.length);
  });

  if (todos.length)
    return (
      <div>
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    );
}
