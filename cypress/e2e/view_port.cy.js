/// <reference types='cypress'/>

describe('Viewport', () => {

    beforeEach(() => {

        cy.visit('https://ecommerce-playground.lambdatest.io/')
    });

    const viewports = [
        { width: 1280, height: 720 }, //Desktop
        { width: 320, height: 480 }, // Mobile portrait
        { width: 768, height: 1024 } // Tablet

    ];

    const presets = [
        'macbook-15', 'samsung-note9', 'ipad-mini', 'iphone-xr'
    ];

    it('Single Test', () => {
        // cy.viewport(640,480)
        cy.viewport('iphone-xr')
    });

    it('Multiple viewport', () => {
        viewports.forEach((Views) => {
            cy.viewport(Views.width, Views.height)
        })
    });

    it('Multiple Presets', () => {

        presets.forEach((device) => {
            cy.viewport((device))
        })
    })
})