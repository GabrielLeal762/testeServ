import "@testing-library/jest-dom/vitest";
import "jest-styled-components/vitest";
import "@testing-library/jest-dom";

import { expect, describe, it } from "vitest";

import { StyledLogo } from "@/Componentes";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lighThemes } from "@/styles";

import { GlobalStyle } from "@/styles";
import { Theme } from "@emotion/react";

const listTheme = [
  {
    name: "light",
    theme: lighThemes,
  },
  {
    name: "dark",
    theme: darkTheme,
  },
];

describe("Logo,test", () => {
  const renderComponent = (theme: Theme, width?: number, height?: number) =>
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledLogo width={width ?? 32} height={height ?? 32} />
      </ThemeProvider>,
    );

  listTheme.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it("Verificando o screen do logo", () => {
        const { container } = renderComponent({ theme, width: 32, height: 32 });
        expect(container.firstChild).toBeInTheDocument();
        expect(container.firstChild).toHaveStyleRule(
          "background-size",
          "cover",
        );
        expect(container.firstChild).toHaveStyleRule("width", "2rem");
        expect(container.firstChild).toHaveStyleRule("height", "2rem");
      });
    });
  });
});
