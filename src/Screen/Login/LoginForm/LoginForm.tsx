import React from "react";
import { Button, Form, Input, Space } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const LoginForm = () => (
  <Form
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Space size={[0, 32]} wrap>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
        noStyle
      >
        <Input placeholder="username" size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        noStyle
      >
        <Input.Password placeholder="password" size="large" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} noStyle>
        <Button type="primary" htmlType="submit">
          Entrar
        </Button>
        <Button type="link">Criar conta</Button>
      </Form.Item>
    </Space>
  </Form>
);
