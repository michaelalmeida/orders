import { ConfigProvider } from "antd";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/translations";
import { MAIN_COLOR } from "./constants/colors";
import GlobalStyle from "./GlobalStyle";
import { Routes } from "./Routes";
import { Container } from "./Ui/Container";

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
          <Routes />
        </Container>
      </ConfigProvider>
    </I18nextProvider>
  );
};
