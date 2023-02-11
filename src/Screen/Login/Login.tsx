import React from "react";
import { H1 } from "../../Ui/Typography";
import * as Style from "./Login.style";
import { LoginForm } from "./LoginForm";
import { ReactComponent as OrdersIllustration } from "../../Assets/illustrations/orders.svg";

export const Login = () => (
  <Style.LoginWrapper>
    <Style.LoginForm>
      <LoginForm />
      <p>Somehjting</p>
    </Style.LoginForm>
    <Style.LoginSide>
      <H1 white>Login</H1>
      <OrdersIllustration />
    </Style.LoginSide>
  </Style.LoginWrapper>
);
