///<reference types='cypress'/>

import AssertPage from "../Pages/AssertPage"

describe('Assertion',()=>{

    beforeEach(()=>{
        
        AssertPage.visit()
        
    });

    it('TDD Assertion',()=>{

        AssertPage.naviagetTOElement();
        AssertPage.click_radioBtn();
        cy.log('Length Check')

        cy.get('input[type="radio"]').should('have.length',3)
        
    })
})