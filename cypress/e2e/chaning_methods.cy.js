/// <reference types='cypress'/>

describe('Chaining Cypress Methods', () => {
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test on uncaught exceptions
            return false;
        });
    });

    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Interacting with elements', () => {
        cy.get('#firstName').type('Cypress');
        cy.get('#firstName').should('have.value', 'Cypress');

        cy.get('#userForm')
        .find('#userName-wrapper')
            .next()
            .should('exist');

        cy.get('#userForm')
        .find('div')
        .first()

        cy.get('#userForm')
        .find('div')
        .last()
        

        cy.get('#userForm')
        .find('#userName-label')
        .parent()
    });

    it.only('Get ELement with index',()=>{

        cy.get("#userForm")
        .find('#genterWrapper')
        .find('#gender-radio-1')
        .click({force:true})

        cy.get('#userForm')
        .find('#hobbiesWrapper')
        .find('[value="2"]')
        .check({force:true})
    })
});
