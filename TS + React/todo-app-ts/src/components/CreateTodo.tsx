import { useState } from "react";

interface Props {
  onCreate: (title: string) => void;
}

const CreateTodo: React.FC<Props> = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Agregar nueva tarea"
        autoFocus
      />
    </form>
  );
};

export default CreateTodo;
