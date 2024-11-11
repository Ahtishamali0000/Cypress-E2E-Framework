class SaucePageHome {
    selectors = {
        username: '[placeholder="Username"]',
        password: '[placeholder="Password"]',
        login_btn: '[data-test="login-button"]',
        error_msg: 'h3[data-test="error"]', // Use the correct selector for the error message
        expected_title: '.title'
    };

    visit() {
        cy.visit(Cypress.env('urls').sauceDemo);
        cy.wait(1000); // Wait a second
        cy.url().then((url) => {    
            console.log('Current URL:', url); // Log the URL
        });

    }

    inputUsername(username) {
        cy.get(this.selectors.username).type(username);
    }

    inputPassword(password) {
        cy.get(this.selectors.password).type(password);
    }

    clickLoginBtn() {
        cy.get(this.selectors.login_btn).click();
    }

    // Method to check for the error message
    verifyErrorMessage(expectedMessage) {
        cy.get(this.selectors.error_msg).should('contain.text', expectedMessage);
    }

    // Method to verify the expected result on the inventory page
    verifyExpectedResult(expectedText) {
        cy.get(this.selectors.expected_title).should('contain.text', expectedText);
    }
}

export default new SaucePageHome();
