import { type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: (id: number) => void;
  onToggleCompleted: (id: number, completed: boolean) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleted,
}) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={(e) => {
          onToggleCompleted(id, e.target.checked);
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo(id);
        }}
      ></button>
    </div>
  );
};

export default Todo;
