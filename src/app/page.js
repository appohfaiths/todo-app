import TodoList from '@/components/todoList';

export default function Home() {
  return (
    <main className="md:w-[40vw] container mx-auto flex-1">
      <TodoList />
    </main>
  );
}
