Feature: Pesquisa no Blog - AgiBank

    Como um usuario
    Quero colher dados da pesquisa
    Para fazer análises das pesquisas retornadas

    @testeum
    Scenario: Preencher pesquisa com dados necessarios
    Given que eu acesse a página do Blog - AgiBank
    And acesse o menu Pesquisa
    When eu preencher os dados da pesquisa
    Then deve ser direcionado para uma página de sucesso

    @testedois
    Scenario: Preencher pesquisa com insucesso
    Given que eu acesse a página do Blog - AgiBank
    And acesse o menu Pesquisa
    When eu preencher os dados da pesquisa com a palavra futebol
    Then deve ser direcionado para uma página de nenhum resultado

    @testetres
    Scenario: Clicando direto no botão Pesquisa
    Given que eu acesse a página do Blog - AgiBank
    And acesse o menu Pesquisa
    When clicar direto no botão Pesquisa
    Then deve ser direcionado todos os tópicos do sistema

    @testequatro
    Scenario: Preencher pesquisa com caracteres especiais
    Given que eu acesse a página do Blog - AgiBank
    And acesse o menu Pesquisa
    When eu preencher os dados da pesquisa com a palavra <@d-*>
    Then deve ser direcionado para uma página de sucesso

