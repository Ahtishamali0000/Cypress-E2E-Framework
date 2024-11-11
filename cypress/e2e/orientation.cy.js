/// <reference types='cypress'/>

describe('Check orientation',()=>{

    beforeEach(()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/')
    });

    it('Landscape Orientation',()=>{
        cy.viewport('samsung-note9', 'landscape')
    });


    it('Portrait Orientation',()=>{
        cy.viewport('samsung-note9', 'portrait')
    });

})