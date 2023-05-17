'use client';
import React from 'react';
import { FaPlusCircle, FaPlusSquare } from 'react-icons/fa';
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
    <section className="my-5 bg-blue-500 py-2 px-2 rounded-full">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            name="addTodoTextInput"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="what do you need to do?"
            className="px-3 py-3 ml-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-3/4 h-full rounded-full"
            onFocus={resetError}
            ref={inputRef}
            data-testid="todoInput"
            autoFocus
          />
          <button
            data-testid="submitButton"
            className="ml-3 text-white hover:text-green-500 hover:bg-white hover:rounded-full"
            onClick={handleSubmit}
          >
            <FaPlusCircle size={38} />
          </button>
        </div>
      </form>
      {errorMessage && (
        <p data-testid="errorMessage" className="text-xs ml-3 mt-1 text-white">
          {errorMessage}
        </p>
      )}
    </section>
  );
}
