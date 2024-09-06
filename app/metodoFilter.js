const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click' , filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const catgoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == catgoria)
    exibirLivrosNaTela(livrosFiltrados)
}



//console.log(btnFiltrarLivrosDeFront)