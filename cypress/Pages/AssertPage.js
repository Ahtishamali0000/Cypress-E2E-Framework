class AssertPage{
    selectors={
        element_banner:'//*[@id="app"]/div/div/div[2]/div/div[1]',
        radio_btn:'//*[@id="item-2"]',
    }

    visit(){
        cy.intercept('GET', 'https://demoqa.com/').as('getData'); // Replace with actual API endpoint
        cy.visit(Cypress.env('urls').demoQA);
        cy.wait('@getData'); // Wait for the specific API call to finish
        
        
    };

    naviagetTOElement(){
        cy.get(this.selectors.element_banner());
    };

    click_radioBtn(){
        cy.get(this.selectors.radio_btn()).click();
    };




}

export default new AssertPage