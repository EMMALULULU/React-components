import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";

export default function LoginForm({ usersLoginData, onLogin }) {
  const [insertUsername, setInsertUsername] = useState("");
  const [insertPassword, setInsertPassword] = useState("");

  const verifyUser = (userInput) => {
    const { username, email, password } = userInput;
    console.log(usersLoginData);
    for (let userData of usersLoginData) {
      if (username !== userData.username) {
        continue;
      }
      if (password !== userData.password) {
        alert("password incorrect");
        setInsertPassword("");
        return;
      }
      onLogin(userInput);
    }
    alert("user not existed");
    setInsertUsername("");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUsernameInput = (e) => {
    setInsertUsername(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setInsertPassword(e.target.value);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={verifyUser}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          onChange={handleUsernameInput}
          value={insertUsername}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password onChange={handlePasswordInput} value={insertPassword} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
}
