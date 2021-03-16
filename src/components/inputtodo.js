import { useState } from "react";
import { v4 as uuid } from "uuid";

const InputToDo = ({ setTodos }) => {
  const [input, setInput] = useState("");

  function clickHandler() {
    const todoObject = {
      id: uuid(),
      title: input,
      completed: false
    };
    setTodos((todos) => [...todos, todoObject]);
    setInput("");
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="type here"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={() => clickHandler()}>Submit</button>
    </div>
  );
};

export default InputToDo;
