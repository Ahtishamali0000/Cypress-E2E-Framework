/* ==== Test Created with Cypress Studio ==== */
it('test_1', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://demoqa.com/');
  cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg > path').click();
  cy.get(':nth-child(4) > .element-list > .menu-list > #item-5 > .text').click();
  cy.get('#demo-tab-what').click();
  cy.get('#demo-tab-origin').click();
  cy.get(':nth-child(4) > .element-list > .menu-list > #item-3').click();
  cy.get('.range-slider').click();
  cy.get('#sliderValue').click();
  /* ==== End Cypress Studio ==== */
});