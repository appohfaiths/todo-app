'use client';

import useInputState from '@/utilities/hooks/useInputState';

export default function AddTodo({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="add a new todo"
        />
      </form>
    </section>
  );
}
