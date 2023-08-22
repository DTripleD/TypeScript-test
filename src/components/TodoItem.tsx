import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  removeToDo: (id: number) => void;
  toggleToDo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeToDo, toggleToDo } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleToDo(id)}
      />
      <span style={{ display: "inline-block", margin: "0 10px" }}>{title}</span>

      <button
        onClick={() => removeToDo(id)}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          color: "red",
        }}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
