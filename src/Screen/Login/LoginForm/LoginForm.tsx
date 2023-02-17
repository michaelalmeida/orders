import { Button, Form, Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { routes } from "../../../constants/routes";

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
        <Link to={`../${routes.REGISTER}`}>
          <Button type="link"> {t("signup")}</Button>
        </Link>
      </Form.Item>
    </Form>
  );
};
