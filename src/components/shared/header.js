import React from 'react';

export default function Header() {
  return (
    <header className="">
      <h1 className="text-4xl sm:text-5xl text-blue-500 text-left sm:text-center uppercase font-bold p-5 shadow-lg shadow-zinc-600">
        todo list
      </h1>
      <hr className="h-1 bg-blue-500" />
    </header>
  );
}
