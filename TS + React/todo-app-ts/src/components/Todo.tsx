import type {type Todo as TodoType } from "../types";

type Props = TodoType;

const Todo: React.FC<Props> = ({ id, title, completed }) => {
    return (
        <div className="view">
            <input type="checkbox" className="toggle" checked={completed} onChange={() => {}} />
            <label htmlFor={id}>{title}</label>
            
        </div>
    );
}

export default Todo;