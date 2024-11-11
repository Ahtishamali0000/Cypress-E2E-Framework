// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const cypress = require("Cypress"); 

// Cypress.Commands.add("Login",(username,password)=>{
//     cy.get("#user-name").type(username);
//     cy.get('input#password').type(password);
//     cy.get('[data-test="login-button"]').click();
// });

// cypress.Commands.add("Logout",()=>{
//     cy.get("#react-burger-menu-btn").click();
//     cy.get("#logout_sidebar_link").click();
// })