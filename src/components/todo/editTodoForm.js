import useInputState from '@/utilities/hooks/useInputState';

export default function EditTodoForm({ editTodo, id, text, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(text);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="ml-3"
        autoFocus
      />
    </form>
  );
}
