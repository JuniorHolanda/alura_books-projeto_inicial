let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
//console.log(btnOdenarPorPreco)

btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}