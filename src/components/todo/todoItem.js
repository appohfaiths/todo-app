import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import useToggleState from '@/utilities/hooks/useToggleState';

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

  return (
    <div className="flex gap-2">
      <Checkbox />
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        todotext
      </p>
      <p>eb</p>
      <p>db</p>
    </div>
  );
}
