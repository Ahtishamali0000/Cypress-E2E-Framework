class LoginPage {
    selectors = {
        user_name: 'input[placeholder="Username"]',
        user_password: 'input[placeholder="Password"]',
        login_btn: "button[type='submit']",
        erroemesg:"div .oxd-alert-content--error",
        forgot_password_link:'div .orangehrm-login-forgot-header',
        reset_btn:'[type="submit"]',
    };

    visit() {
        cy.visit(Cypress.env('urls').orangeHRM); // Ensure this environment variable is set correctly
    };

    enterUsername(username) {
        cy.get(this.selectors.user_name).type(username); // Use .type() to enter the username
    };

    enterPassword(password) {
        cy.get(this.selectors.user_password).type(password); // Use .type() to enter the password
    };

    clickLogin() {
        cy.get(this.selectors.login_btn).click(); // Click the login button
    };

    verifyErrorMesg(){
        cy.get(this.selectors.verifyErrorMesg)   
        .find('p')
        .should('be.visible')
        .and('contain.text','Invalid credentials')
    };

    ForGotPassword(){
        cy.get(this.selectors.forgot_password_link).click()

 };

 resetBtn(){
    cy.get(this.selectors.reset_btn).click()
 };




}

export default new LoginPage();
