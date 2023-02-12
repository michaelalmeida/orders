import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Login } from "./Screen/Login";
import { Container } from "./Ui/Container";
import { ConfigProvider } from "antd";
import { MAIN_COLOR } from "./Constants/colors";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/translations";

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `${MAIN_COLOR}`,
            borderRadius: 10,
          },
        }}
      >
        <Container>
          <GlobalStyle />
          <Login />
        </Container>
      </ConfigProvider>
    </I18nextProvider>
  );
};
