import "@testing-library/jest-dom/vitest";
import "jest-styled-components/vitest";
import "@testing-library/jest-dom";

import { expect, describe, it } from "vitest";

import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lighThemes } from "@/styles";

import { GlobalStyle } from "@/styles";

import { StyledButton } from "@/Componentes";

const listTheme = [
  {
    name: "light",
  },
  {
    name: "dark",
  },
];

describe("Verificando o component StyledButton", () => {
  const renderComponent = (className?: string) =>
    render(
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledButton className={className} />
      </ThemeProvider>,
    );

  listTheme.forEach(({ name }) => {
    describe(`${name}`, () => {
      it("Testando se o button existe nos themas", () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
      });
      it("Testando as classes do button", () => {
        const { asFragment } = renderComponent("alert");
        expect(asFragment()).toMatchSnapshot();
      });
      it("Testando se o button existe nos themas", () => {
        const { asFragment } = renderComponent("disabled");
        expect(asFragment()).toMatchSnapshot();
      });
      it("Testando se o button existe nos themas", () => {
        const { asFragment } = renderComponent("primary");
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});

describe("Verificando o component StyledButton lightTheme", () => {
  const renderComponent = (className?: string) =>
    render(
      <ThemeProvider theme={lighThemes}>
        <GlobalStyle />
        <StyledButton className={className} />
      </ThemeProvider>,
    );

  listTheme.forEach(({ name }) => {
    describe(`${name}`, () => {
      it("Testando se o button existe nos themas", () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
      });
      it("Testando as classes do button", () => {
        const { asFragment } = renderComponent("alert");
        expect(asFragment()).toMatchSnapshot();
      });
      it("Testando se o button existe nos themas", () => {
        const { asFragment } = renderComponent("disabled");
        expect(asFragment()).toMatchSnapshot();
      });
      it("Testando se o button existe nos themas", () => {
        const { asFragment } = renderComponent("primary");
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
