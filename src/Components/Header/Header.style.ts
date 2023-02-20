import styled from "styled-components";
import { WHITE } from "../../constants/colors";
import { BOX, PADDING } from "../../constants/sizes";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${WHITE};
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px 0px;
  padding: ${PADDING.MEDIUM}px;
  justify-content: center;

  @media screen and (max-width: ${BOX.LARGE}px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
`;
