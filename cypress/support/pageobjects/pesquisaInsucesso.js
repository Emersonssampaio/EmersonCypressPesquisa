import PesquisaQALocator from '../locators/pesquisaQALocator'
const pesquisaQALocator = new PesquisaQALocator
const url = Cypress.config("baseUrl")

class PesquisaInsucesso {
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
            cy.get(pesquisaQALocator.digitarPesquisa()).type('Futebol')
            cy.get(pesquisaQALocator.botaoPesquisa()).click()           
    }
   
    // Verificar dados retornados da pesquisa do AgiBank
    pesquisaInsucessoPagina() {
        cy.get(pesquisaQALocator.notificacaoNenhumResultado()).should('contain', 'Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes.') 
    } 
}

export default PesquisaInsucesso;