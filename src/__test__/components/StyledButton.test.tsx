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

describe("Verificar estilos do Button darkTheme", () => {
  const RenderComponet = (className?: string) =>
    render(
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledButton className={className} />
      </ThemeProvider>,
    );

  listTheme.forEach(({ name }) => {
    describe(`${name}`, () => {
      it("Verificar as classes do button darkTheme", () => {
        const { asFragment } = RenderComponet();
        expect(asFragment()).toMatchSnapshot();
      });

      it("Verificação das  classes Alert", () => {
        const { asFragment } = RenderComponet("alert");
        expect(asFragment()).toMatchSnapshot();
      });
      it("Verificação das  classes disabled", () => {
        const { asFragment } = RenderComponet("disabled");
        expect(asFragment()).toMatchSnapshot();
      });
      it("Verificação das  classes primary", () => {
        const { asFragment } = RenderComponet("primary");
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});

describe("Verificar estilos do Button lightTheme", () => {
  const RenderComponet = (className?: string) =>
    render(
      <ThemeProvider theme={lighThemes}>
        <GlobalStyle />
        <StyledButton className={className} />
      </ThemeProvider>,
    );

  listTheme.forEach(({ name }) => {
    describe(`${name},Light`, () => {
      it("Verificar as classes do button lightTheme", () => {
        const { asFragment } = RenderComponet();
        expect(asFragment()).toMatchSnapshot();
      });

      it("Verificação das  classes Alert", () => {
        const { asFragment } = RenderComponet("alert");
        expect(asFragment()).toMatchSnapshot();
      });
      it("Verificação das  classes disabled", () => {
        const { asFragment } = RenderComponet("disabled");
        expect(asFragment()).toMatchSnapshot();
      });
      it("Verificação das  classes primary", () => {
        const { asFragment } = RenderComponet("primary");
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
