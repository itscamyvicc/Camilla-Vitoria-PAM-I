// --- Função que retorna tipos ---
function saudacao(nome) {
    return "Ol\u00E1, ".concat(nome, "!");
}
console.log(saudacao('Leandro'));
// Utilizando a interface usuário fica assim:
function exibirUsuario(usuario) {
    console.log("Nome: ".concat(usuario.nome));
    console.log("Idade: ".concat(usuario.idade));
}
