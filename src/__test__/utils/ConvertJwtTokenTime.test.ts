import { JwtTokenTime } from "@/utils";
import "@testing-library/jest-dom/vitest";
import "jest-styled-components/vitest";
import "@testing-library/jest-dom";
import { expect, describe, it, beforeAll, afterAll } from "vitest";

describe("Conversor do tempo do token", () => {
  beforeAll(() => {
    vi.spyOn(Date, "now").mockReturnValue(
      new Date("2024-07-01T00:00:00Z").getTime(),
    );
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("deve retornar zero quando a expiração ocorre no mesmo instante", () => {
    const exp = Math.floor(Date.now() / 1000);

    const result = JwtTokenTime(exp);

    expect(result).toBe(0);
  });
  it("deve retornar cinco quando a expiração ocorre no mesmo instante", () => {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5;

    const result = JwtTokenTime(exp);

    expect(result).toBe(5);
  });
});
