import { createGlobalStyle, Theme } from "styled-components";
import "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme?: Theme }>`
  html,
  body {
    background-color: ${(props) => props.theme.appBackground};
    color: ${(props) => props.theme.appColor};
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }

  h1,
  h2,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
`;
