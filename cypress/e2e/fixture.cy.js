describe('Ficture Demo', function() {

  beforeEach(function() { 
    cy.visit("https://www.saucedemo.com/");
    
    cy.fixture('fixtures-demo/sauceCredentials').then(credentials => {
      console.log('Loaded credentials:', credentials); // Log credentials
      this.credentials = credentials; 
    });
  });
  
  
    it('Login with Standard User', function() { 
      cy.get("#user-name").type(this.credentials.standard_username); 
      cy.get('input#password').type(this.credentials.Password);
      cy.get('[data-test="login-button"]').click();

      cy.get(".title").should('contain.text','Products')
    });

    it('Invalid Username',function(){

        cy.get("#user-name").type(this.credentials.dumy_username   ); 
        cy.get('input#password').type(this.credentials.Password);
        cy.get('[data-test="login-button"]').click();
  
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')        
    });

    it('Problem User',function(){

      cy.get("#user-name").type(this.credentials.problem_username   ); 
      cy.get('input#password').type(this.credentials.Password);
      cy.get('[data-test="login-button"]').click();

      cy.get(".title").should('contain.text','Products')
  });

  });
  