
let User_name = "standard_user";
let Password = "secret_sauce";

describe("Locatores in cypress", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });

    it('Get Method', () => {
        cy.get("#user-name").type(User_name);
        cy.get('input#password').type(Password);
        cy.get('[data-test="login-button"]').click();
    });

    it('EQ|First|Last Method', () => {
        cy.get('input').first().type(User_name);
        cy.get('input').eq(1).type(Password);
        cy.get('input').last().click();
    });

    it('Filter Method', () => {
        cy.get('input').filter('[type="text"]').type(User_name);
        cy.get('input').filter('[type="password"]').type(Password);
        cy.get('input').filter('[type="submit"]').click();
    });

    it('Find Method', () => {
        cy.get('form').find('input').eq(0).type(User_name);
        cy.get('form').find('input').eq(1).type(Password);
        cy.get('form').find('input').eq(2).click();
    });

    it('PARENT Method', () => {
        cy.get('form').parent().should('have.class','login-box')
    });

})