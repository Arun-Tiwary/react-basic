import "./styles.css";
import { useState } from "react";
import InputToDo from "./components/inputtodo.js";
import ListToDo from "./components/listtodo.js";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <InputToDo setTodos={setTodos} />
      <ListToDo setTodos={setTodos} todos={todos} />
    </div>
  );
}
