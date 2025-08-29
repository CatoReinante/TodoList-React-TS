import CreateTodo from "./CreateTodo";

interface Props {
  onAddTodo: (title: string) => void;
}

const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        Todo App
        <img
          src="../public/img/typescript.png"
          alt="Logo"
          style={{ width: "50px", height: "auto" }}
        />
      </h1>
      <CreateTodo onCreate={onAddTodo} />
    </header>
  );
};

export default Header;
