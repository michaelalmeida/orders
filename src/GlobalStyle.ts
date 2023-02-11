import { createGlobalStyle } from "styled-components";
import { BLACK, MAIN_COLOR, BACKGROUND } from "./Constants/colors";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    font-size: 62.5%;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    color: ${BLACK};
    background: ${BACKGROUND};
    font-family: 'Work Sans', sans-serif;
    font-size: 1.4rem;
 }
  a {
    color: ${MAIN_COLOR};
    text-decoration: none
  }
  button {
    border: 4px solid ${MAIN_COLOR};
    background: transparent;
    padding: 5px 20px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 14px;
    cursor: pointer;
    @media screen and (max-width: 800px) {
      padding: 5px;
  }
  div {
    box-sizing: border-box;
  }
}
`;

export default GlobalStyle;
