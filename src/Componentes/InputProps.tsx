import styled, { Theme } from "styled-components";
import { InputProps } from "@/types/Formulario";
import Rem from "@/utils/pxToRem";

export const StyledInput = styled.input<InputProps & { theme?: Theme }>`
  background: ${(props) => props.theme.textInput.active};
  color: ${(props) => props.theme.textInput.activeColor};
  cursor: pointer;
  border-radius: ${Rem(8)};
  font-size: ${Rem(16)};
  border: ${Rem(1)} solid ${(props) => props.theme.textInput.borderColor};
  box-size: border-box;
  font-weight: 500;
  padding: ${Rem(10)} ${Rem(16)};
  margin-bottom: ${Rem(10)};
  width: 94%;
  transition: background 0.3s;

  &::placeholder {
    color: gray;
  }
  &:hover {
    background: ${(props) => props.theme.textInput.placeholderColor};
  }
`;
