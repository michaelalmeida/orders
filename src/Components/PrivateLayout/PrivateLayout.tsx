import React from "react";
import { Header } from "../Header";
import { Container } from "./PrivateLayout.style";

export const PrivateLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
