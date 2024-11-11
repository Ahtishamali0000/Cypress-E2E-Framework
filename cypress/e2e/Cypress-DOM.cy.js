///<reference types='cypress'/>

describe('InVisible Demo', () => {
    it('Invisible Commands', () => {
      cy.visit('https://demoqa.com/accordian');
      cy.wait(2000); // It's generally better to avoid fixed waits when possible.
  
      // Get the collapse element and check its visibility
      cy.get('.collapse').eq(6).then($element => {
        const isVisible = Cypress.dom.isVisible($element);
        cy.log(`Collapse contents as soon as I load the website: ${isVisible}`);
  
        // You can also assert visibility if necessary
        expect(isVisible).to.be.false; // Adjust this based on your expectations
      });
    });
  });
  