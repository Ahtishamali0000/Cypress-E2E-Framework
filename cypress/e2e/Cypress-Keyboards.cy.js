///<reference types='cypress'/>

describe('Keystroke Demo', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
    });
  
    it('Cypress - Slow Type', { keystrokeDelay: 100 }, () => {
      cy.get('#user-name').type('standard_user');
    });
  
    it('Cypress - Standard Type', () => {
      cy.get('#user-name').type('standard_user');
    });
  
    it('Cypress - Fastest Type', { keystrokeDelay: 0 }, () => {
      cy.get('#user-name').type('standard_user');
    });
  });
  