import { useState, type JSX } from "react";
import Todos from "./components/Todos";

const mockTodos = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Build a Todo App", completed: false },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  return (
    <>
      <Todos todos={todos} />
    </>
  );
};

export default App;
