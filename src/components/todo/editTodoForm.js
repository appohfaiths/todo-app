import React from 'react';
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
    <form data-testid="editTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="px-3 py-3 ml-3 focus:text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none w-full h-full border-2 border-slate-400 rounded-lg"
        autoFocus
        data-testid="editTodoInput"
      />
    </form>
  );
}
