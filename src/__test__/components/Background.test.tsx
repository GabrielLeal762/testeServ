import { render } from "@testing-library/react";
import { Background } from "@/Componentes";

import "@testing-library/jest-dom/vitest";
import "jest-styled-components/vitest";
import { expect, describe, it } from "vitest";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme } from "@/styles";

describe("Background", () => {
  it("Verificar as regras de estilo do Background", () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Background />
      </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule("background-size", "cover");
    expect(container.firstChild).toHaveStyleRule(
      "background",
      "url(photo.avif)",
    );
    expect(container.firstChild).toHaveStyleRule("width", "50vw");
    expect(container.firstChild).toHaveStyleRule("height", "100vh");
  });
});
