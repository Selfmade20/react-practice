import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/todoForm'

function Todo({ todo, index }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}



function App() {

  const [todos, setTodos] = useState([
    {
      text: "Clean the house and make up the bed",
      isCompleted: false
    },
    {
      text: "Create a todo app",
      isCompleted: false
    },
    {
      text: "Excecise and do home workouts",
      isCompleted: false
    },
  ])

  const addTodo = () => {

  }
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
