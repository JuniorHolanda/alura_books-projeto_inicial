const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click' , filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0)  : livros.filter(livro => livro.categoria == categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function exibirValorTotalDosLivrosDisponiveisNaTela(Total) {
    elementoComValorTotaldeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${Total}</span></p>
        </div>
    `
}



//console.log(btnFiltrarLivrosDeFront)