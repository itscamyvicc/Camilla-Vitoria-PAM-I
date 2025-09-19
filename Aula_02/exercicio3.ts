interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let novo_livro: Livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    anoPublicacao: 1937
}

function exibirLivro (livro: Livro): void {
    console.log(`Informações do livro: ${novo_livro.titulo}, ${novo_livro.autor}, ${novo_livro.anoPublicacao}.`)
}
exibirLivro(novo_livro);