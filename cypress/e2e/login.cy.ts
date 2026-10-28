describe('Login', () => {
  beforeEach(()=>{
     cy.visit('http://localhost:5173/')
  })
  it('Should do Login, after go Home', () => {
    cy.get("form").should("be.visible");
    cy.get("input[type='email'").type("teste@gmail.com");
    cy.get("input[type='password'").type("123Doidomaluco.")
    cy.get("button[type='submit'").click()
    cy.url().should("include","/home")
  })
})


describe('Login', () => {
  beforeEach(()=>{
     cy.visit('http://localhost:5173/')
  })
  it('Should Login after and incorret login', () => {
    cy.get("form").should("be.visible");
    cy.get("input[type='email'").type("teste2@gmail.com");
    cy.get("input[type='password'").type("123Doidomaluco.")
    cy.get("button[type='submit'").click()

    cy.contains("Não foi possivel fazer esta operação").should("be.visible")
   
  })
})