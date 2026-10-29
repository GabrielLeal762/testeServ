import styled, { Theme } from "styled-components";

export const Background = styled.div<{ theme?: Theme }>`
  background-size: cover;
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 50vw;
`;
