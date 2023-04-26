import PesquisaQALocator from '../locators/pesquisaQALocator'
const pesquisaQALocator = new PesquisaQALocator
const url = Cypress.config("baseUrl")

class PesquisaQAPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
      
    // Acionar página Pesquisa AgiBank
    clickPesquisaQA(){
       cy.get(pesquisaQALocator.pesquisa()).click();

    }

    // Inserir valor válido
    clicarCadastrar(){
            cy.get(pesquisaQALocator.digitarPesquisa()).type('Pix')
            cy.get(pesquisaQALocator.botaoPesquisa()).click()           
    }
   
    // Verificar dados retornados da pesquisa do AgiBank
    visualizarSucesso() {
        cy.get(pesquisaQALocator.notificacaoSucesso()).should('contain', 'Pix') 
    } 
}

export default PesquisaQAPage;