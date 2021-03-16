import useState from "react";
import { v4 as uuid } from "react";
const InputToDo = ({ settodos }) => {
  const [input, setInput] = useState("");

  function clickHandler() {
    const todoObject = {
      id: uuid(),
      title: { input },
      completed: false
    };
    const todos = (todos) => [...todos, todoObject];
  }
  return (
    <div>
      <button>zxvxdc</button>
      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={() => clickHandler()}>asdfh</button>
    </div>
  );
};

export default InputToDo;
