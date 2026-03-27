describe('Testes de API de conta', () => {

    it('deve falhar ao criar conta com userId inválido', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/accounts',
            body: {
                userId: '999999',
                balance: 300
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('deve falhar ao criar conta com saldo negativo', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/accounts',
            body: {
                userId: '1',
                balance: -100
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('deve criar uma conta com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/accounts',
            body: {
                userId: '1',
                balance: 300
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
        })
    })
})

