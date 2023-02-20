import styled from "styled-components";
import { BOX } from "../../constants/sizes";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: ${BOX.LARGE}px) {
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: ${BOX.SCREEN}px;
  gap: 30px;

  @media screen and (max-width: ${BOX.SCREEN}px) {
    width: 100%;
  }
`;
