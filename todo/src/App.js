import React, { useState } from "react";
import "./App.css";


export default function TodoForm() {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const addTodo = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo here....."
        className="input"
        value={value}
      />
    </form>
  );
}

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}



function App() {
  const [todos, setTodos] = useState([
    {
      text: "Clean the house and make up the bed",
      isCompleted: false,
    },
    {
      text: "Create a todo app",
      isCompleted: false,
    },
    {
      text: "Excecise and do home workouts",
      isCompleted: false,
    },
  ]);

  const addTodo = () => {};
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
