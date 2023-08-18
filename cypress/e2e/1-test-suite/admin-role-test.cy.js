/// <reference types="cypress" />

describe('example to-do app', () => {

    beforeEach('Login as admin',() => {
        cy.visit(Cypress.env('BaseUrl'))
        
    })

    it('Admin create user roles', {
        tags: ['@smoke'],
        defaultCommandTimeout: 30000
    }, () => {

        cy.get('[name=username]').type('Admin')
        cy.get('[name=password]').type('admin123')
        cy.get('button[type=submit]').click()
        cy.get('h6').should('have.text','Dashboard')

        let el = [];

        cy.get('.oxd-main-menu > li > a > span').each(e=>{
            
                el.push(e)
        })
        
        el.every(selectMenu)
    
        function selectMenu(elements){
            if(elements.text() == 'Admin'){
                console.log("Found!")
                elements.click()
                return true;
            }
            console.log("Not Found!")
            return false;
        }
        
    })
})

