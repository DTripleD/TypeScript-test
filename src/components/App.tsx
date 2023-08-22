import { useState, useRef, useEffect } from "react";
import { ITodo } from "../types/data";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addToDo();
    }
  };

  const addToDo = () => {
    if (value) {
      setTodos([...todos, { id: Date.now(), title: value, complete: false }]);
      setValue("");
    }
  };

  const removeToDo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleToDo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return { ...todo, complete: !todo.complete };
      })
    );
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={addToDo}>Add</button>
      </div>
      <TodoList items={todos} removeToDo={removeToDo} toggleToDo={toggleToDo} />
    </div>
  );
};

export default App;
