/// <reference types='cypress'/>
import orangeLogin from "../Pages/orangeLogin";

describe('Login Page Functionalities', () => {
    let credentials; // Declare a variable to hold credentials

    beforeEach(() => {
        cy.fixture('LoginHrm').then(loadedCredentials => {
            credentials = loadedCredentials; // Assign loaded credentials to the variable
        });
        orangeLogin.visit(); // Visit the OrangeHRM login page
    });

    it('should login successfully with valid credentials', () => {
        orangeLogin.enterUsername(credentials.valid_username);
        orangeLogin.enterPassword(credentials.valid_password);
        orangeLogin.clickLogin();
        
        // Add assertions for successful login
    });

    it('should show error message for invalid credentials', () => {
        orangeLogin.enterUsername(credentials.invalid_username);
        orangeLogin.enterPassword(credentials.invalid_password);
        orangeLogin.clickLogin();

        cy.wait(5000)
        
        orangeLogin.verifyErrorMesg();
        // Add assertions for the error message
    });

    it('Shoulf allow to user rest their password',()=>{

        orangeLogin.ForGotPassword()
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.get('h6').should('contain.text', 'Reset Password')

        orangeLogin.enterUsername(credentials.valid_username);
        orangeLogin.resetBtn()
    })
});
