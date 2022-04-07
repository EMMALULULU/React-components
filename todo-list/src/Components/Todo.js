import React, { useState } from "react";
import { List, Tooltip, Button, Col, Space, Input } from "antd";

export default function Todo({ todo, onDelete, onComplete, onEdit }) {
  const [isComplete, setIsComplete] = useState(todo.isComplete);
  const [isEdit, setIsEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo.task);
  const deleteTodoHandler = () => {
    onDelete(todo.key);
  };

  const completeTodoHandler = () => {
    onComplete(todo.key);
    setIsComplete(true);
  };

  const onEditing = (e) => {
    setCurrentTodo(e.target.value);
  };
  const onSubmitTodo = () => {
    onEdit(currentTodo, todo.key);
    setIsEdit(false);
  };
  const editTodoHandler = () => {
    setIsEdit(true);
  };
  const editingTodo = (
    <Input.Group compact>
      <Input
        style={{ width: "calc(100% - 80px)" }}
        onChange={onEditing}
        value={currentTodo}
      />

      <Button onClick={onSubmitTodo}>Submit</Button>
    </Input.Group>
  );

  return (
    <List.Item>
      <div
        style={
          isComplete ? { textDecoration: "line-through", color: "#ccc" } : {}
        }
      >
        {isEdit ? editingTodo : todo.task}
      </div>

      <Space>
        <Button onClick={editTodoHandler}> Edit</Button>
        <Button onClick={completeTodoHandler}>Completed</Button>
        <Button onClick={deleteTodoHandler}>Delete</Button>
      </Space>
    </List.Item>
  );
}
