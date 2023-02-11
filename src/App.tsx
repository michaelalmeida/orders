import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Login } from "./Screen/Login";
import { Container } from "./Ui/Container";
import { ConfigProvider } from "antd";
import { MAIN_COLOR } from "./Constants/colors";

export const App = () => {
  return (
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
  );
};
