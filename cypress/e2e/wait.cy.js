/// <reference types='cypress'/>

it('Wait for a certain Route',()=>{

    cy.visit('https://www.demoblaze.com/');

    cy.intercept('POST','bycat').as('waitforbycat')
    cy.wait('@waitforbycat')

    cy.get('.list-group')
    .find('a')
    .contains('Laptop')
    .click()
})