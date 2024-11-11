/// <reference types='cypress'/>

describe('Alliases and Assertion',()=>{
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test on uncaught exceptions
            return false;
        });
    });

    beforeEach(()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
    });

    it('Yield subject from cammands',()=>{
        cy.get('#userName-label').then(label=>{
            expect(label.text()).to.eq('Name')
        })
    });
    
    it('Wrap subject from cammands',()=>{
        cy.get('#userName-label').then(label=>{
            cy.wrap(label).should('contain','Name')
        })
    });

    it('Invoke',()=>{

        cy.get('#userName-label').invoke('text').then(labelText =>{
            expect(labelText).to.eq('Name')
        });

        cy.get('#userName-label').invoke('attr','class').then(elementclass =>{
            expect(elementclass).to.eq('form-label')
        });
    });

    it('CHai jQuery Assertions',()=>{

        cy.get('#userName-label').then($labed=>{
            expect($labed.text()).to.equal('Name')
        })
    });

    it.only('Iterating through Web Element',()=>{

            cy.get('#hobbiesWrapper').each(selectAllCheckBoxes=>{
                cy.wrap(selectAllCheckBoxes).find('[type="checkbox"]').check({force:true})
            })
    })
})