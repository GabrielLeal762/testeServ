describe("template spec", () => {
  beforeEach(() => {
    cy.login("gabriel124@gmail.com", "123Doidomaluco.");
    cy.visit("http://localhost:5173/home");
  });

  it("Testando se existe os componentes da page", () => {
    cy.get(".cards").should("be.visible");
    cy.get("Header").should("be.visible");

    cy.get(".styledh").should("be.visible");
    cy.get(".buttons").should("be.visible");
    cy.contains("Bem vindo").should("be.visible");
  });
});
