///<reference types='cypress'/>

describe('Cypress browser demo',()=>{

    beforeEach(()=>{
        cy.visit('https://www.whatismybrowser.com/')
    });

    it('Log web browser information',()=>{
        cy.log(Cypress.browser.name)
        cy.log(Cypress.browser.family)
        cy.log(Cypress.browser.isHeaded)
        cy.log(Cypress.browser.isHeadless)
        cy.log(Cypress.browser.path)
        cy.log(Cypress.browser.version)

    });

    it('Check Header depending on the web browser',()=>{
        if (Cypress.browser.name==='chromium') {
            cy.get(".string-major").should('have.text','Chrome 130 on Windows 11')
        }else if(Cypress.browser.name==='firefox'){
            cy.get(".string-major").should('have.text','firefox 130 on Windows 11')

        }
    })  
})