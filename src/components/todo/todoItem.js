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
      <div onClick={handleToggleClick}>
        {completed ? <FaCheckCircle /> : <FaRegCircle />}
      </div>
    );
  };

  useEffect(() => {
    console.log(completed);
  }, [completed]);

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
        <div className="flex gap-2 items-center my-3">
          <Checkbox />
          <div className="flex flex-col items-start w-3/4">
            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
              {text}
            </p>
            <p className="text-xs">
              {completed ? <span>completed</span> : <span>pending</span>}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/* <button onClick={toggle}>
              <FaPen />
            </button> */}
            <button onClick={() => deleteTodo(id)}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
