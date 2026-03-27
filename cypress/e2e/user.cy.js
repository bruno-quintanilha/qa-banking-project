describe('User API Tests', () => {

    it('deve criar um usuário com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/users',
            body: {
                name: 'Teste Cypress',
                email: 'teste@cypress.com'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
        })
    })

    it.skip('deve falhar ao criar usuário sem email', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/users',
            body: {
                name: 'Teste sem email'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it.skip('deve falhar ao criar um usuário com email inválido', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/users',
            body: {
                name: 'Teste',
                email: 'teste-invalido'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

})