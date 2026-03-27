describe('Teste da API de Transação', () => {
    it('deve falhar ao criar transação com valor negativo', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/transactions',
            body: {
                accountId: '1',
                type: 'deposit',
                amount: -100
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('deve falhar ao criar transação com conta inexistente', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/transactions',
            body: {
                accountId: '999999',
                type: 'deposit',
                amount: 100
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('deve criar uma transação com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/transactions',
            body: {
                accountId: '1',
                type: 'deposit',
                amount: 100
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
        })
    })
})