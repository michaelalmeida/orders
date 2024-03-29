import React from "react";
import { useTranslation } from "react-i18next";
import { H1 } from "../../Ui/Typography";
import * as Style from "./Login.style";
import { LoginForm } from "./LoginForm";

import OrdersIllustration from "../../assets/illustrations/orders.svg";
import { Container } from "../../Ui/Container";

export const Login = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Style.LoginWrapper>
        <Style.LoginForm>
          <LoginForm />
        </Style.LoginForm>
        <Style.LoginSide>
          <H1 white>{t("form.title")}</H1>
          <OrdersIllustration />
        </Style.LoginSide>
      </Style.LoginWrapper>
    </Container>
  );
};
