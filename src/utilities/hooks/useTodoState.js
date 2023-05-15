import useLocalStorage from '@/utilities/hooks/useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorage('todos', initialTodos);

  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: uuidv4(), text: newTodoText, completed: false },
      ]);
    },
    deleteTodo: (todoIdToDelete) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoIdToDelete);
      setTodos(updatedTodos);
    },
    toggleTodo: (todoIdToToggle) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoIdToToggle
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoIdToEdit, newTodoText) => {
      const updatedTodos = todos.map((todo) => {
        todo.id === todoIdToEdit ? { ...todo, text: newTodoText } : todo;
      });
      setTodos(updatedTodos);
    },
  };
};
