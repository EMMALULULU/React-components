import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

export default function RegisterForm({
  onRegister,
  changeCurrentTabHandler,
  labels,
}) {
  const [form] = Form.useForm();
  console.log(form);

  const onFinish = (userData) => {
    onRegister(userData);
    form.resetFields();
    changeCurrentTabHandler(labels.LOGIN);
    alert("Register Success");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="First & Last name"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email address!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Your password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create An Account
        </Button>
      </Form.Item>
    </Form>
  );
}
