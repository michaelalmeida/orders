import styled from "styled-components";
import { BLACK, WHITE } from "../constants/colors";

interface TypographyProps {
  white?: boolean;
}

export const H1 = styled.h1<TypographyProps>`
  font-size: 4.2rem;
  margin: 0;
  padding: 0;
  color: ${(props) => (props.white ? WHITE : BLACK)};
  font-weight: 700;
`;
