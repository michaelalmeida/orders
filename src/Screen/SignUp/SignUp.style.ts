import styled from "styled-components";
import { WHITE, YELLOW } from "../../constants/colors";
import { BOX, PADDING } from "../../constants/sizes";

export const SignUpWrapper = styled.div`
  display: flex;
  width: ${BOX.LARGE}px;
  background-color: ${WHITE};
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px 0px;

  @media screen and (max-width: ${BOX.LARGE}px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SignUpForm = styled.div`
  flex-grow: 1;
  padding: ${PADDING.XXX_LARGE}px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const SignUpSide = styled.div`
  flex-basis: 350px;
  background-color: ${YELLOW};
  padding: 30px;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${BOX.LARGE}px) {
    flex-basis: 100px;
    justify-content: center;

    svg {
      height: 200px;
    }
  }
`;
