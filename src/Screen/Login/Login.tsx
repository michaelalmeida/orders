import React from "react";
import { H1 } from "../../Ui/Typography";
import * as Style from "./Login.style";
import { LoginForm } from "./LoginForm";
import OrdersIllustration from "../../assets/illustrations/orders.svg";

export const Login = () => (
  <Style.LoginWrapper>
    <Style.LoginForm>
      <LoginForm />
    </Style.LoginForm>
    <Style.LoginSide>
      <H1 white>Login</H1>
      <OrdersIllustration />
    </Style.LoginSide>
  </Style.LoginWrapper>
);
