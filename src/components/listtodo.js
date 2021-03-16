const ListToDo = ({ todos, setTodos }) => {
  // const toggleHAndler = (id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo;
  //     })
  //   );
  // };
  return (
    <div>
      {todos.map(({ id, title, completed }) => (
        <li
          // onClick={toggleHAndler(id)}
          // style={completed ? {backgroundColor: "red"} : null}
          style={{ textAlign: "left", marginLeft: "200px" }}
        >
          {title}
        </li>
      ))}
      <h3>Total={todos.length}</h3>
    </div>
  );
};

export default ListToDo;
