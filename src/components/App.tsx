import { useState } from "react";
import { ITodo } from "../types/data";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addToDo = () => {
    setTodos([...todos, { id: Date.now(), title: value, complete: false }]);
  };

  return (
    <div>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={addToDo}>Add</button>
      </div>
    </div>
  );
};

export default App;
