/// <reference types="cypress" />

describe('Funcionalidade Pré Cadastro', () => {
    const { faker } = require('@faker-js/faker');

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve Completar o pré cadastro com Sucesso', () => {
        let nomeFaker = faker.name.firstName () //varavel let ela pode ser sobreposta
        let sobreNomeFaker = faker.name.lastName()
        let emailfaker = faker.internet.email (nomeFaker)


        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type('teste@testeboy')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker2)
        cy.get('#account_last_name').type(sobreNomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })

    it.only('Deve Completar o pré-cadastro com sucesso usando dados customizados', () => {
        let emailFaker2 = faker.internet.email ()
       cy.preCadastro(emailFaker2, 'senha!@forte', 'Fábio', 'Binho')
       cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })


});