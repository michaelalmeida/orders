import { Avatar, Popover } from "antd";
import React from "react";
import { useUserContext } from "../../Hooks/useUser";
import { ScreenContainer } from "../../Ui/Container";
import { AvatarWrapper, HeaderWrapper, Logo } from "./Header.style";

export const Header = () => {
  const { isAuth } = useUserContext();

  return (
    <HeaderWrapper>
      <ScreenContainer>
        <Logo>aa</Logo>
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
