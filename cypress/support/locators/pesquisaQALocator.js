class PesquisaQALocator {

    pesquisa = () => { return '#search-open' }
    digitarPesquisa = () => { return '.desktop-search > .search-form > label > .search-field' }
    botaoPesquisa = () => { return '.desktop-search > .search-form > .search-submit'}
    notificacaoSucesso = () => {return '.archive-title > span'}
    notificacaoNenhumResultado = () => {return '.entry-content > p'}
    tituloPagina = () => {return '.archive-title'}
}

export default PesquisaQALocator;