import styled from "styled-components";
import { WHITE, MAIN_COLOR } from "../../Constants/colors";

export const LoginWrapper = styled.div`
  width: 700px;
  display: flex;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px 0px;
`;

export const LoginForm = styled.div`
  flex-basis: 200px;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginSide = styled.div`
  flex-grow: 1;
  background-color: ${MAIN_COLOR};
  padding: 20px;
  border-radius: 0 20px 20px 0;

  svg {
    width: 350px;
    margin: auto;
    display: block;
  }
`;
