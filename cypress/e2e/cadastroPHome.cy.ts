describe('Teste de cadastro de pessoa na Home Page', () => {

  beforeEach(()=>{
     cy.login("gabriel124@gmail.com","123Doidomaluco.");
    cy.visit("http://localhost:5173/home")
     cy.visit("http://localhost:5173/cadastro")
  })
  it('passes', () => {
    cy.get("input[type='text'").type("Gabriel Leal")
    cy.get("input[type='email'").type('gabriel124@gmail.com')
      cy.get("input[type='password'").type('123Doidomaluco.')
       cy.get("input[type='checkbox'").type("true")
       cy.get("button[type='submit'").click()
  })
})



describe('Teste de cadastro de pessoa na Home Page', () => {

  beforeEach(()=>{
       cy.login("gabriel124@gmail.com","123Doidomaluco.");
    cy.visit("http://localhost:5173/home")
   
     cy.visit("http://localhost:5173/cadastro")
  })
  it('passes', () => {
    cy.get("input[type='text'").type("Gabriel Leal")
    cy.get("input[type='email'").type('gabriel124@gmail.com')
      cy.get("input[type='password'").type('123Doidomaluco.')
       cy.get("input[type='checkbox'").type("true")
       cy.get("button[type='submit'").click()
       cy.contains("Email e senha já cadastrados").should("be.visible").should("have.css","color","rgb(255, 0, 0)")
  })
})