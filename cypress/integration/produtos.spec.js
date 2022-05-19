/// <reference types="cypress" />

describe('Funcionalidade Páginas de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() //primeiro item
            //.last()  // ultimo item
            //.eq(3)  // pegar o 3 da lista *notar q a lista começa a partir do zero ex 0 1 2 3
            .contains('Ariel Roll Sleeve Sweatshirt') // para pegar usando o nome *tem q estar lincado
            .click()

    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10 // variavel atribuidada a um determinado nome, simplifica ao invés de ter que trocar varias vzs o mesmo numero

        cy.get('[class="product-block grid"]')
            .contains('Argus All-Weather Tank').click()
            cy.get('.button-variable-item-M').click()
            cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()
            
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho.')

    })
});