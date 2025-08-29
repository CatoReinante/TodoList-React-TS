import { type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: (id: number) => void;
}

const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={() => {}}
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
