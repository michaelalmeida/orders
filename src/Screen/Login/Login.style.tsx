import styled from "styled-components";
import { MAIN_COLOR, WHITE } from "../../constants/colors";
import { BOX, PADDING } from "../../constants/sizes";

export const LoginWrapper = styled.div`
  width: ${BOX.MEDIUM}px;
  display: flex;
  background-color: ${WHITE};
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px 0px;

  @media screen and (max-width: ${BOX.LARGE}px) {
    width: 100%;
    height: 100vh;
  }
`;

export const LoginForm = styled.div`
  flex-basis: ${BOX.VERY_SMALL}px;
  padding: ${PADDING.EXTRA_LARGE}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${BOX.LARGE}px) {
    flex-grow: 1;
  }
`;

export const LoginSide = styled.div`
  flex-grow: 1;
  background-color: ${MAIN_COLOR};
  padding: 30px;

  svg {
    width: 350px;
    margin: auto;
    display: block;
  }

  @media screen and (max-width: ${BOX.LARGE}px) {
    display: none;
  }
`;
