
const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};
pessoa.descrever();
pessoa['nome'] = 'teste 1';
pessoa.descrever();
pessoa.nome = 'teste 2';
pessoa.descrever();