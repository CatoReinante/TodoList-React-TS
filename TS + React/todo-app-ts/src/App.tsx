import { useState, type JSX } from "react";
import Todos from "./components/Todos";
import { TODO_FILTERS } from "./const";
import type { FilterValue } from "./types";
import Footer from "./components/Footer";
import Header from "./components/Header";

const mockTodos = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Build a Todo App", completed: true },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleRemove = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id: number, completed: boolean) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleRemoveCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleCreateTodo = (title: string): void => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={handleCreateTodo} />

        <Todos
          todos={filteredTodos}
          onRemoveTodo={handleRemove}
          onToggleCompleted={handleCompleted}
        />
        <Footer
          filterSelected={filterSelected}
          activeCount={activeCount}
          completedCount={completedCount}
          handleFilterChange={handleFilterChange}
          onClearCompleted={handleRemoveCompleted}
        />
      </div>
    </>
  );
};

export default App;
