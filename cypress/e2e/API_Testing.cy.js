/// <reference types='cypress'/>

describe('API Functional Testing with Cypress', () => {

    it('Should GET the DATA', () => {

        cy.request('https://jsonplaceholder.typicode.com/posts/1').as('getResource')

        cy.get('@getResource').then(Response => {
            cy.log(Response)
        })
    });

    it('Should GET All the DATA', () => {

        cy.request('https://jsonplaceholder.typicode.com/posts').as('getResource')

        cy.get('@getResource').then(Response => {
            cy.log(Response)
        })
    });


    it('Should Create the DATA', () => {

        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'cypress API testing',
                body: 'This is the Body',
                userID: 1
            }
        ).as('PostResource')

        cy.get('@PostResource').then(Response => {
            // cy.log(Response)
            expect(Response.body.title).to.eq('cypress API testing')
            expect(Response.body.body).to.eq('This is the Body')
            expect(Response.body.userID).to.eq(1)
            expect(Response.status).to.eq(201)
            expect(Response.statusText).to.eq('Created')
        })
    });

    it('Should PUT the DATA', () => {

        cy.request('PUT','https://jsonplaceholder.typicode.com/posts/1',
            {
                id:1,
                title: 'Titles has been updated',
                body: 'Updated the body for ID 1',
                userID: 101
            }
        ).as('PutResource')

        cy.get('@PutResource').then(Response => {
            cy.log(Response)

            expect(Response.status).to.eq(200)
            expect(Response.statusText).to.eq('OK')
            expect(Response.body.body).to.eq('Updated the body for ID 1')
        })
    });


    it('Should Patch the DATA', () => {

        cy.request('PATCH','https://jsonplaceholder.typicode.com/posts/1',
            {
                
                body: 'Patching the body for ID 1',
                
            }
        ).as('PutResource')

        cy.get('@PutResource').then(Response => {
            cy.log(Response)
        })
    });


    it('Should Delete the DATA', () => {

        cy.request('Delete','https://jsonplaceholder.typicode.com/posts/1',
            
        ).as('DeleteResource')

        cy.get('@DeleteResource').then(Response => {
            cy.log(Response)
        })
    });




})