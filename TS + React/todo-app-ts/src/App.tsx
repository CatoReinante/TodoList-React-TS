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
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="todoapp">
        <Todos todos={todos} onRemoveTodo={handleRemove} />
      </div>
    </>
  );
};

export default App;
