describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/register");
  });
  it("Teste de cadastro correto", () => {
    cy.get("form").should("be.visible");
    cy.get("input[type='text'").type("Gabriel Leal");
    cy.get("input[type='email'").type("gabriel124@gmail.com");
    cy.get("input[type='checkbox'").type("true");
    cy.get("button[type='submit'").click();
    cy.get("input[type='password'").type("123Doidomaluco.");
    cy.contains("Entre 8 e 16 caracteres").should(
      "have.css",
      "color",
      "rgb(0, 128, 0)",
    );
    cy.contains("Possuir pelo menos uma letra maiúscula").should(
      "have.css",
      "color",
      "rgb(0, 128, 0)",
    );
    cy.contains("Possuir pelo menos um número").should(
      "have.css",
      "color",
      "rgb(0, 128, 0)",
    );
    cy.contains("Possuir pelo menos um caractere especial").should(
      "have.css",
      "color",
      "rgb(0, 128, 0)",
    );
    cy.get("button[type='submit'").click();
    cy.url().should("include", "/");
  });
});
