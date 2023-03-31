
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

const vitor = new Pessoa('Vitor J Guerra', 25);
const renan = new Pessoa('Renan J Paula', 30);
const danillo = new Pessoa('Danillo S Pereira', 20);

vitor.descrever();
renan.descrever();
danillo.descrever();

console.log(danillo);