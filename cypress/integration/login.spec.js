/// <reference types="cypress" />

context('Funcionalidade Login', () => {


   beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   })

   afterEach(() => {
       cy.screenshot()
   })

    it('Deve fazer login com Sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2)').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })

    it('Deve exibir mensagem de erro ao inserir usuario inválidos', () => {
        cy.get('#username').type('aluno_bac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2)').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    })

    it('Deve exibir mensagem de erro ao inserir senha inválidos', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2)').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
    })

})