
// Cypress comes with its own API for creating custom commands and overwriting existing commands. The built in Cypress commands use the very same API that's defined below.

// There are two API available for adding custom commands:

// Cypress.Commands.add() - use to add a custom command to use when writing tests
// Cypress.Command.overwrite() - use to override an existing built-in Cypress command or reserved internal function. Caution: this overrides it for Cypress as well and could impact how Cypress behaves.




describe("Custom Commands Example", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
    });
  
    it("Success Page", () => {
        cy.Login("standard_user", "secret_sauce");
      cy.get(".title").should('contain.text', 'Products');
      cy.Logout();
      cy.url().should('eq','https://www.saucedemo.com/')
    });

    // afterEach("Logout",()=>{
    //     cy.Logout();
    // })

    it("Failed Login test",()=>{
        cy.Login('standard_user','dumy_password');
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')        

    })
  });
  