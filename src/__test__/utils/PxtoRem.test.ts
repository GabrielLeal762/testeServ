
import "@testing-library/jest-dom/vitest";
import "jest-styled-components/vitest";
import "@testing-library/jest-dom"
import { expect, describe, it} from "vitest";

import Rem from "@/utils/pxToRem";





describe("Teste de conversão do Rem",()=>{

    it("Testando se a conversao está correta,deve retornar 2",()=>{

        const result=Rem(32)
        expect(result).toBe("2rem")
    })

    it("Testando se a conversao está correta,deve retornar valores negativos",()=>{
        

        const result=Rem(-32)
        expect(result).toBe("-2rem")
    })



})