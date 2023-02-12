import React from "react";
import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
  const { t } = useTranslation();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: t("form.required") as string }]}
      >
        <Input placeholder={t("form.username") as string} size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: t("form.required") as string }]}
      >
        <Input.Password
          placeholder={t("form.password") as string}
          size="large"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} noStyle>
        <Button type="primary" htmlType="submit">
          {t("login")}
        </Button>
        <Button type="link"> {t("signup")}</Button>
      </Form.Item>
    </Form>
  );
};
