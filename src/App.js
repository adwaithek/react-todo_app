

import React, { useState } from "react";
import "./app.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { title: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleCompletedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input placeholder="" type="text" value={newTodo} onChange={handleNewTodo}   />
        <button className="adbtn" onClick={addTodo}>ADD</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => handleCompletedTodo(index)}>{todo.title}</span>
            <button style={{color:"white"}} onClick={() => handleDeleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
