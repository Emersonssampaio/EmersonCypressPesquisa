
import PesquisandoDireto from '../pageobjects/pesquisandoDireto'
const pesquisandoDireto = new PesquisandoDireto

Given("que eu acesse a página do Blog - AgiBank", () => {
    pesquisandoDireto.acessarSite();
})

And("acesse o menu Pesquisa", () => {
    pesquisandoDireto.clickPesquisaQA();
})

When("clicar direto no botão Pesquisa", () => {
    pesquisandoDireto.clicarCadastrar();
})

Then("deve ser direcionado todos os tópicos do sistema", () => {
    pesquisandoDireto.visualizarSucessoRetorno();
})

