
// object

const pessoa = {
    "nome": 'Danillo',
    "idade": 20,
    "teste teste": 11,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

pessoa.sobrenome = 'Souza Pereira'

console.log(pessoa);

console.log(pessoa.idade);
console.log(pessoa['nome']);

pessoa.falar = function() {
    console.log('Falei')
}

pessoa.falar()
pessoa.descrever()