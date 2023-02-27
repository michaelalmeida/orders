import React from "react";
import styled from "styled-components";
import { WHITE } from "../../constants/colors";

export const ChartsWrapper = styled.div`
  height: 200px;
  border-radius: 20px;
  background: ${WHITE};
`;

export const Charts = () => {
  return (
    <ChartsWrapper>
      <h1>Charts</h1>
    </ChartsWrapper>
  );
};
