import { FaCheckCircle, FaRegCircle, FaPen, FaTrashAlt } from 'react-icons/fa';
import useToggleState from '@/utilities/hooks/useToggleState';
import { useEffect } from 'react';

export default function TodoItem({
  id,
  text,
  completed,
  toggleTodo,
  editTodo,
  deleteTodo,
}) {
  // const [isEditing, toggle] =

  const Checkbox = () => {
    const [isChecked, toogle] = useToggleState(false);

    const handleToggleClick = () => {
      toogle();
      completed;
    };
    return (
      <div onClick={handleToggleClick}>
        {isChecked ? <FaCheckCircle /> : <FaRegCircle />}
      </div>
    );
  };

  useEffect(() => {
    console.log(completed);
  }, [completed]);

  return (
    <div className="flex gap-2">
      <Checkbox />
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </p>
      <button onClick={toggleTodo}>
        <FaPen />
      </button>
      <button onClick={() => deleteTodo(id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
}
