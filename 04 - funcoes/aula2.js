// Escrever nome
function escreverNome (nome) {
    console.log(`Meu nome é ${nome}`);
}

escreverNome('Danillo');

escreverNome('Vitor');

escreverNome('Renan');

// Verificar se é maior de idade
function verificarIdade (idade) {
    if (idade >= 18) {
        console.log(`Você tem ${idade} anos e é maior de idade.`);
    } else {
        console.log(`Você tem ${idade} anos e é menor de idade.`);
    }

}

verificarIdade(20);

verificarIdade(18);

verificarIdade(17);