class EnderecoPage {

    editarEnderecoFaturamento(nome, sobreNome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email) { /// metodo só ativa quando colocar ()

        //elementos +ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobreNome)
        cy.get('#billing_company').clear().type(empresa)

        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click() //selecionar opção no select
        //.select('Brasil') // quando a cntr for um select
        // .check() para chekcbox
        //.uncheck() para desmarcar o checkbox

        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}') // 2 - opção de selecionar no select para simular a ação do teclado colocar junto como parametro chaves mais o comando {enter}
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()    
    }

    editarEnderecoEntrega() {
        /// elementos + ações
    }
}

export default new EnderecoPage()