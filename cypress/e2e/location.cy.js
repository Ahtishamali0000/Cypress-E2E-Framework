
describe("Location Desmo",()=>{

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/")
    });

    it("Should have title tag with value Swag LAbs",()=>{

        cy.title().should('eq','Swag Labs')
    });

    it("URL should have value https://www.saucedemo.com/",()=>{

        cy.url().should('eq','https://www.saucedemo.com/')
    });

    it("Protocol should be HTPPS",()=>{

        cy.location('protocol').should('contain','https')
    });

    it("Hostname should be www.saucedemo.com",()=>{

        cy.location('hostname').should('eq','www.saucedemo.com')
    });

    it("should redirect to the /inventory.html page",()=>{

        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();

        cy.location("pathname").should('eq','/inventory.html')
    });


})