/*
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    } 

    calcularViagem(kmRodado, precoCombustivel) {
       return kmRodado * this.gastoMedio * precoCombustivel;
    }
}

const corolla = new Carro('Toyota', 'Preto', 1 / 12);
const palio = new Carro('Fiat', 'Preto', 1 / 10);

console.log(corolla.calcularViagem(70, 5));
console.log(palio.calcularViagem(70, 5));