import { Avatar, Input, Popover } from "antd";
import React from "react";
import { useUserContext } from "../../Hooks/useUser";
import { ScreenContainer } from "../../Ui/Container";
import { H1 } from "../../Ui/Typography";
import {
  AvatarWrapper,
  HeaderWrapper,
  Logo,
  QuickActions,
} from "./Header.style";

export const Header = () => {
  const { isAuth } = useUserContext();

  return (
    <HeaderWrapper>
      <ScreenContainer>
        <Logo>
          <H1>Logo</H1>
        </Logo>
        <QuickActions>
          <Input />
        </QuickActions>
        <AvatarWrapper>
          <Popover placement="bottom" content={<p>teste</p>} trigger="click">
            <Avatar size={40} style={{ cursor: "pointer" }}>
              USER
            </Avatar>
          </Popover>
        </AvatarWrapper>
      </ScreenContainer>
    </HeaderWrapper>
  );
};
