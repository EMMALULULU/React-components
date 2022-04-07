import "./App.css";
import "antd/dist/antd.css";
import { useState } from "react";
import { Input, Button, Space } from "antd";
import TodoList from "./Components/TodoList";
import Todo from "./Components/Todo";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const onInput = (e) => {
    setUserInput(e.target.value);
  };

  const addNewToDoHandler = () => {
    const todo = { task: userInput, isCompleted: false, key: Math.random() };
    setTodos((prevTodo) => [...prevTodo, todo]);
    setUserInput("");
    console.log(todos);
  };

  const editTodoHandler = (todo, key) => {
    const newTodos = [...todos];
    todos.forEach((currentTodo, currentIdx) => {
      if (currentTodo.key === key) {
        newTodos[currentIdx].task = todo;
      }
    });
    setTodos(newTodos);
  };

  const deleteTodoHandler = (key) => {
    const newTodos = [...todos];
    todos.forEach((currentTodo, currentIdx) => {
      if (currentTodo.key === key) {
        console.log(currentTodo.task);
        newTodos.splice(currentIdx, 1);
      }
    });
    setTodos(newTodos);
  };
  const completeTodoHandler = (key) => {
    const newTodos = [...todos];
    todos.forEach((currentTodo, currentIdx) => {
      if (currentTodo.key === key) {
        newTodos[currentIdx].isCompleted = true;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div style={{ maxWidth: "40%", margin: "100px auto" }}>
      <Input
        placeholder="Basic usage"
        style={{ margin: "1rem 0" }}
        onChange={onInput}
        value={userInput}
      />
      <Button type="primary" onClick={addNewToDoHandler}>
        Add New To Do
      </Button>
      <TodoList
        todos={todos}
        onEdit={editTodoHandler}
        onDelete={deleteTodoHandler}
        onComplete={completeTodoHandler}
      />
    </div>
  );
}

export default App;
