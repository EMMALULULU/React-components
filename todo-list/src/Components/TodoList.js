import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, onEdit, onDelete, onComplete }) {
  const todoList = todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.key}
        onEdit={onEdit}
        onDelete={onDelete}
        onComplete={onComplete}
      />
    );
  });
  return <div>{todoList}</div>;
}
