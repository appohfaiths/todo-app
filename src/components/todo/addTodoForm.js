'use client';
import { useState, useRef } from 'react';
import useInputState from '@/utilities/hooks/useInputState';

export default function AddTodo({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== '') {
      addTodo(value);
      reset();
    } else {
      setErrorMessage('Please add some text to create a new todo');
      if (document.activeElement === inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  const resetError = () => {
    if (errorMessage !== '') {
      setErrorMessage('');
    }
  };

  return (
    <section className="my-5 bg-blue-500 py-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="add a new todo"
          className="ml-3 p-2"
          onFocus={resetError}
          ref={inputRef}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </section>
  );
}
