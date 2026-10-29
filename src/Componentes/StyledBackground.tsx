import styled from "styled-components";
import { Theme } from "styled-components";
import Rem from "@/utils/pxToRem";

export const StyledBackgound = styled.div<{ theme?: Theme }>`
  border-radius: ${Rem(10)};
  border: ${Rem(1)} solid ${(props) => props.theme.card.border};
  background: ${(props) => props.theme.appBackgroundBanner};
  padding-bottom: ${Rem(30)};
  padding-left: ${Rem(30)};
  padding-top: ${Rem(20)};
  padding-right: ${Rem(30)};
  margin: ${Rem(15)};
`;
