describe('Login', () => {
    
    //Cenário 1
    it('Login com sucesso', () => {
        cy.visit('https://staging.d2pnv8jp5au9a7.amplifyapp.com/')
        cy.get('[data-test="email"]').type('admin@teste.com')
        cy.get('[data-test="password"]').type('123456')
        cy.get('[data-test="submit"]').click()
    })
    
    //Cenário 2
    it('Email inválido', () => {
        cy.visit('https://staging.d2pnv8jp5au9a7.amplifyapp.com/')
        cy.get('[data-test="email"]').type('admin.teste.com')
        cy.get('[data-test="password"]').type('123456')
        cy.get('[data-test="submit"]').click()
        cy.get('#login-error').should('have.text', 'Erro ao fazer login')
    })

    //Cenário 3
    it('Senha inválida', () => {
        cy.visit('https://staging.d2pnv8jp5au9a7.amplifyapp.com/')
        cy.get('[data-test="email"]').type('admin@teste.com')
        cy.get('[data-test="password"]').type('123')
        cy.get('[data-test="submit"]').click()
        cy.get('#login-error').should('have.text', 'Erro ao fazer login')
    })

    //Cenário 4
    it('Dados em Branco', () => {
        cy.visit('https://staging.d2pnv8jp5au9a7.amplifyapp.com/')
        cy.get('[data-test="email"]').clear()
        cy.get('[data-test="password"]').clear()
        cy.get('[data-test="submit"]').click()
        cy.get('#login-error').should('have.text', 'Erro ao fazer login')
    })
})