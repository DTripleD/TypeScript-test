import { ITodo } from "../types/data";

import TodoItem from "./TodoItem";

interface ITodoListProps {
  items: ITodo[];
  removeToDo: (id: number) => void;
  toggleToDo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, removeToDo, toggleToDo } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          removeToDo={removeToDo}
          toggleToDo={toggleToDo}
          {...todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
