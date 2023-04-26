import PesquisaQALocator from '../locators/pesquisaQALocator'
const pesquisaQALocator = new PesquisaQALocator
const url = Cypress.config("baseUrl")

class PesquisandoDireto {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
      
    // Acionar página Pesquisa AgiBank
    clickPesquisaQA(){
       cy.get(pesquisaQALocator.pesquisa()).click();

    }

    // Inserir valores incorretos
    clicarCadastrar(){
            cy.get(pesquisaQALocator.botaoPesquisa()).click()           
    }
   
    // Verificar dados retornados da pesquisa do AgiBank
    visualizarSucessoRetorno() {
        cy.get(pesquisaQALocator.tituloPagina()).should('contain', 'Resultados da busca por:') 
    } 
}

export default PesquisandoDireto;