import styled from "styled-components";
import { BLACK, MAIN_COLOR, WHITE } from "../../constants/colors";
import { BOX } from "../../constants/sizes";

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-basis: 200px;

  @media screen and (max-width: ${BOX.LARGE}px) {
    height: auto;
  }
`;

export const Menu = styled.nav`
  width: 100%;
`;

export const MenuList = styled.nav`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface MenuItemProps {
  active?: boolean;
}

export const MenuItem = styled.li<MenuItemProps>`
  a {
    padding: 15px;
    display: block;
    background: ${({ active }) => (active ? MAIN_COLOR : "transparent")};
    color: ${({ active }) => (active ? WHITE : BLACK)};
    border-radius: 15px;
  }
`;
