import React from 'react';

import { FaCheckCircle, FaRegCircle, FaPen, FaTrashAlt } from 'react-icons/fa';
import useToggleState from '@/utilities/hooks/useToggleState';
import EditTodoForm from './editTodoForm';
import { useEffect, useState } from 'react';

export default function TodoItem({
  id,
  text,
  completed,
  toggleTodo,
  editTodo,
  deleteTodo,
}) {
  const [isEditing, toggle] = useToggleState(false);

  const Checkbox = () => {
    const handleToggleClick = () => {
      toggleTodo(id);
    };
    return (
      <button
        data-testid="checkbox"
        className="hover:text-blue-500"
        onClick={handleToggleClick}
      >
        {completed ? (
          <FaCheckCircle className="text-blue-600" />
        ) : (
          <FaRegCircle />
        )}
      </button>
    );
  };

  return (
    <>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          text={text}
          toggleEditForm={toggle}
        />
      ) : (
        <div className="flex gap-4 items-center my-3 rounded-lg shadow-md py-4 px-2">
          <Checkbox />
          <div className="flex flex-col items-start w-3/4">
            <p
              style={{
                textDecoration: completed ? 'line-through' : 'none',
              }}
              className="text-2xl font-semibold w-full overflow-hidden"
            >
              {text}
            </p>
            <p className="text-xs">
              {completed ? <span>completed</span> : <span>active</span>}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggle}>
              <FaPen />
            </button>
            <button
              data-testid="deleteButton"
              className="hover:text-red-600"
              onClick={() => deleteTodo(id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
