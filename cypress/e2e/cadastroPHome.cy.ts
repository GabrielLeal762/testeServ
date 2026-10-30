describe("Teste de cadastro de pessoa na Home Page", () => {
  beforeEach(() => {
    cy.login("gabriel124@gmail.com", "123Doidomaluco.");
    cy.visit("http://localhost:5173/home");
    cy.visit("http://localhost:5173/cadastro");
  });

  it("Testtando os passes do cadastro", () => {
    cy.get("form").should("be.visible");
    cy.get("input[type='text'").type("Gabriel Leal");
    cy.get("input[type='email'").type("gabriel124@gmail.com");
    cy.get("input[type='password'").type("123Doidomaluco.");
    cy.get("input[type='checkbox'").type("true");
    cy.get("button[type='submit'").click();
  });
});

describe("Testando os valores de Já cadastrados do cadastro", () => {
  beforeEach(() => {
    cy.login("gabriel124@gmail.com", "123Doidomaluco.");
    cy.visit("http://localhost:5173/home");
    cy.visit("http://localhost:5173/cadastro");
  });
  it("passes até o valor já cadastrado", () => {
    cy.get("form").should("be.visible");
    cy.get("input[type='text'").type("Gabriel Leal");
    cy.get("input[type='email'").type("gabriel124@gmail.com");
    cy.get("input[type='password'").type("123Doidomaluco.");
    cy.get("input[type='checkbox'").type("true");
    cy.get("button[type='submit'").click();
    cy.contains("Email e senha já cadastrados")
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 0, 0)");
  });
});
