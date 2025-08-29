import { type ListOfTodos } from "../types";
import Todo from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: number) => void;
  onToggleCompleted: (id: number, completed: boolean) => void;
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
