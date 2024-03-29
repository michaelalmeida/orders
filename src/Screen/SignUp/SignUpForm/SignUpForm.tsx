import { Alert, Button, Checkbox, Form, Input, Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useUserCreation } from "../../../Hooks/useUser";

const { Option } = Select;

interface UserSignUpProps {
  agreement: boolean;
  confirm: string;
  email: string;
  language?: string;
  password: string;
  phone?: string;
  prefix: string;
  type: "enterprise" | "personal";
  name: string;
}

interface SignUpFormProps {
  setCompleted: (completed: boolean) => void;
}

export const SignUpForm = ({ setCompleted }: SignUpFormProps) => {
  const { t } = useTranslation();
  const { createUser, loading, error, user } = useUserCreation();

  const [form] = Form.useForm();

  const onFinish = (values: UserSignUpProps) => {
    createUser({ email: values.email, password: values.password });
  };

  if (user) {
    setCompleted(true);
  }

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ width: "100%" }}
      scrollToFirstError
    >
      {error?.code === "auth/email-already-in-use" && (
        <Form.Item>
          <Alert
            message={t("form.error.email.alreadyExists")}
            type="error"
            showIcon
            closable
          />
        </Form.Item>
      )}

      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: t("form.error.email.notValid"),
          },
          {
            required: true,
            message: t("form.error.required"),
          },
        ]}
      >
        <Input placeholder={t("form.email")} />
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: t("form.error.required"),
            },
          ]}
          hasFeedback
          style={{
            display: "inline-block",
            width: "calc(50% - 12px)",
            marginRight: "24px",
          }}
        >
          <Input.Password placeholder={t("form.password")} />
        </Form.Item>

        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: t("form.error.required"),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder={t("form.password.confirm")} />
        </Form.Item>
      </Form.Item>

      <Form.Item
        name="type"
        label={t("form.accountType")}
        rules={[{ required: true, message: t("form.error.required") }]}
      >
        <Select placeholder={t("form.accountType")}>
          <Option value="personal">{t("form.accountType.personal")}</Option>
          <Option value="enterprise">{t("form.accountType.enterprise")}</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: t("form.error.required"),
          },
        ]}
      >
        <Input placeholder={t("form.name")} />
      </Form.Item>

      <Form.Item
        name="language"
        rules={[{ message: t("form.error.required") }]}
      >
        <Select placeholder={t("form.language")}>
          <Option value="pt">{t("form.language.pt")}</Option>
          <Option value="en">{t("form.language.en")}</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error(t("form.error.required"))),
          },
        ]}
      >
        <Checkbox>{t("form.agreement")}</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Register
        </Button>
        <Link to="../">
          <Button type="link"> {t("cancel")}</Button>
        </Link>
      </Form.Item>
    </Form>
  );
};
