import styled, { Theme } from "styled-components";
import Rem from "@/utils/pxToRem";

export const StyledCard = styled.div<{ theme?: Theme }>`
  background: ${(props) => props.theme.card.background};

  border: 1px solid ${(props) => props.theme.card.border};

  border-radius: ${Rem(16)};

  padding: ${Rem(24)};

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.buttons.primary};

    box-shadow: 0 0 25px rgba(59, 130, 246, 0.15);

    transform: translateY(-2px);
  }
`;
