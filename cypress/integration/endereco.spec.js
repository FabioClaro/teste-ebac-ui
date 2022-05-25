/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
       cy.visit('minha-conta')
       cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)   
       })
       
    });

    it('Deve fazer cadastro de faturamento com Sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Felipe', 'Nenem', 'Facebook', 'Brasil', 'Av dos bobos', '5', 'Bogotá', 'Rio de janeiro', '25452525', '2525325325', 'felipeemail@ElementInternals.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        /// login
        /// cadastro de endereço
        
    });

    it('Deve fazer cadastro de faturamento com Sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobreNome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
});