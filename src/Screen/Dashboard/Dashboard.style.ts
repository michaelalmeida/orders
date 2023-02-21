import styled from "styled-components";
import { YELLOW } from "../../constants/colors";

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Stats = styled.div`
  padding: 30px;
  flex-basis: 200px;
  display: flex;
  border-radius: 20px;
  background-color: ${YELLOW};
  flex-direction: column;
`;
