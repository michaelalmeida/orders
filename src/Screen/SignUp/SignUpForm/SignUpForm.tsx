import { Button, Checkbox, Form, Input, Select } from "antd";

import React from "react";
import { useTranslation } from "react-i18next";

const { Option } = Select;

export const SignUpForm = () => {
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="49">+49</Option>
        <Option value="54">+54</Option>
        <Option value="55">+55</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "+55",
      }}
      style={{ width: "100%" }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
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
              message: "Please input your password!",
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
              message: "Please confirm your password!",
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
        name="phone"
        rules={[{ message: "Please input your phone number!" }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="type"
        label="Selecione o tipo de conta"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Pessoal</Option>
          <Option value="female">Empresa</Option>
        </Select>
      </Form.Item>

      <Form.Item name="language" rules={[{ message: "Please select gender!" }]}>
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
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
