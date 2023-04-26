
import PesquisaInsucesso from '../pageobjects/pesquisaInsucesso'
const pesquisaInsucesso = new PesquisaInsucesso

Given("que eu acesse a página do Blog - AgiBank", () => {
    pesquisaInsucesso.acessarSite();
})

And("acesse o menu Pesquisa", () => {
    pesquisaInsucesso.clickPesquisaQA();
})

When("eu preencher os dados da pesquisa com a palavra futebol", () => {
    pesquisaInsucesso.clicarCadastrar();
})

Then("deve ser direcionado para uma página de nenhum resultado", () => {
    pesquisaInsucesso.pesquisaInsucessoPagina();
})

