import styled, { Theme } from "styled-components";
import Rem from "@/utils/pxToRem";

interface LogoProps {
  width: number;
  height: number;
}

export const StyledLogo = styled.div<LogoProps & { theme?: Theme }>`
  background-image: ${(props) => props.theme.appLogo};
  background-size: cover;
  width: ${(props) => Rem(props.width)};
  height: ${(props) => Rem(props.height)};
`;
