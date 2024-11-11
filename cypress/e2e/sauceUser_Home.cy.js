/// <reference types='cypress'/>
import saucePageHome from "../Pages/saucePageHome";

describe('Iterate over JSON object', () => {
    const testData = require('../../cypress/fixtures/fixtures-demo/sauceUser.json');

    beforeEach(() => {
        saucePageHome.visit();
        cy.wait(5000)
    });

    testData.forEach(test => {
        it(test.name, () => {
            saucePageHome.inputUsername(test.username);
            saucePageHome.inputPassword(test.Password);
            saucePageHome.clickLoginBtn();

            if (test.expected === 'Products') {
                saucePageHome.verifyExpectedResult(test.expected);
            } else {
                saucePageHome.verifyErrorMessage(test.expected);
            }
        });
    });
});
