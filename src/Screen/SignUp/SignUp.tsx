import React from "react";
import { useTranslation } from "react-i18next";
import WorkingIllustration from "../../assets/illustrations/working.svg";
import { H1, P } from "../../Ui/Typography";
import * as Style from "./SignUp.style";
import { SignUpForm } from "./SignUpForm";

export const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Style.SignUpWrapper>
      <Style.SignUpSide>
        <WorkingIllustration />
      </Style.SignUpSide>
      <Style.SignUpForm>
        <H1 marginBottom>{t("signup")}</H1>
        <P marginBottom>{t("form.signup.description")}</P>
        <SignUpForm />
      </Style.SignUpForm>
    </Style.SignUpWrapper>
  );
};
