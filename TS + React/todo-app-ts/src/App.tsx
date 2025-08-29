import { useState, type JSX } from "react";
import Todos from "./components/Todos";

const mockTodos = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Build a Todo App", completed: true },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

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
  return (
    <>
      <div className="todoapp">
        <Todos
          todos={todos}
          onRemoveTodo={handleRemove}
          onToggleCompleted={handleCompleted}
        />
      </div>
    </>
  );
};

export default App;
