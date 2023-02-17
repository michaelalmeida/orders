import styled from "styled-components";
import { BOX } from "../constants/sizes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media screen and (max-width: ${BOX.LARGE}px) {
    height: auto;
  }
`;
