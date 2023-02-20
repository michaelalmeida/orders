import React from "react";
import { Header } from "../Header";
import { SideBar } from "../Sidebar";
import { Container, Layout } from "./PrivateLayout.style";

export const PrivateLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Layout>
      <Header />
      <Container>
        <SideBar />
        {children}
      </Container>
    </Layout>
  );
};
