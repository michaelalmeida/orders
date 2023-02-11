import styled from "styled-components";
import { WHITE, MAIN_COLOR } from "../../Constants/colors";

export const LoginWrapper = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px 0px;
`;

export const LoginForm = styled.div`
  flex-grow: 1;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginSide = styled.div`
  flex-basis: 40%;
  background-color: ${MAIN_COLOR};
  padding: 20px;
  border-radius: 0 20px 20px 0;
`;
