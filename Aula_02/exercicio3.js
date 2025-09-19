var novo_livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    anoPublicacao: 1937
};
function exibirLivro(livro) {
    console.log("Informa\u00E7\u00F5es do livro: ".concat(novo_livro.titulo, ", ").concat(novo_livro.autor, ", ").concat(novo_livro.anoPublicacao, "."));
}
exibirLivro(novo_livro);
