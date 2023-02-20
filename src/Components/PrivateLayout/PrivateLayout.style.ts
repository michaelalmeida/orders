import styled from "styled-components";
import { BOX } from "../../constants/sizes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: ${BOX.LARGE}px) {
    height: auto;
  }
`;
