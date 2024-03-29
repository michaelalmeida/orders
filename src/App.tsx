import { ConfigProvider } from "antd";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/translations";
import { MAIN_COLOR } from "./constants/colors";
import GlobalStyle from "./GlobalStyle";
import { UserProvider } from "./Hooks/useUser";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `${MAIN_COLOR}`,
          },
          components: {
            Button: {
              borderRadius: 5,
              boxShadow: "0",
            },
            Popover: {
              borderRadius: 20,
            },
          },
        }}
      >
        <>
          <GlobalStyle />
          <UserProvider>
            <Routes />
          </UserProvider>
        </>
      </ConfigProvider>
    </I18nextProvider>
  );
};
