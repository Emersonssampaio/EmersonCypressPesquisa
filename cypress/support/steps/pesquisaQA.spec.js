
import PesquisaQAPage from '../pageobjects/pesquisaQAPage'
const pesquisaQAPage = new PesquisaQAPage

Given("que eu acesse a página do Blog - AgiBank", () => {
    pesquisaQAPage.acessarSite();
})

And("acesse o menu Pesquisa", () => {
    pesquisaQAPage.clickPesquisaQA();
})

When("eu preencher os dados da pesquisa", () => {
    pesquisaQAPage.clicarCadastrar();
})

Then("deve ser direcionado para uma página de sucesso", () => {
    pesquisaQAPage.visualizarSucesso();
})

