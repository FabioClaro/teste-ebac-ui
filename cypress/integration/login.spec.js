/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => { //bloco de funcionalidade


   beforeEach(() => { // criar bloco função () => {}
    cy.visit('minha-conta/')
   })

  /// afterEach(() => {
     ///  cy.screenshot()
  /// })

    it('Deve fazer login com Sucesso', () => { // bloco de ações
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2)').type('teste@teste.com') /// type - click - should são metodos e por isso tem que usar ()
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })

    it('Deve fazer login com sucesso - Usando arquivos de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('.woocommerce-form > :nth-child(2)').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    });

    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('.woocommerce-form > :nth-child(2)').type(dados.senha, {log:false}) //usar o {log: false} para não deixar exibir a senha quando compartilhar os dados do teste
             cy.get('.woocommerce-form > .button').click()
    
            cy.get('.page-title').should('contain', 'Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac') 
        })
    });

    it('Deve exibir mensagem de erro ao inserir usuario inválidos', () => {
        cy.get('#username').type('aluno_bac1@teste.com')
        cy.get('.woocommerce-form > :nth-child(2)').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('Deve exibir mensagem de erro ao inserir senha inválidos', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2)').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
    })

    
})