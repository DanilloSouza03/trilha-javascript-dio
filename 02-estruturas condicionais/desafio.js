/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variaveis. Sendo elas: 
    - 1 Preço do etanol;
    - 2 Preço da gasolina;
    - 3 O tipo de combustivel; 
    - 4 Gasto médio de combustível do carro por KM;
    - 5 Distância em KM da viagem;

Imprima no console o valor que será gasto de para realizar esta viagem.
*/

const precoGasolina = 4.59;
const precoEtanol = 3.99;
const kmPorCombustivel = 10;
const distanciaKm = 100;
const tipoCombustivel = `Gasolina`;

const litrosGastos = distanciaKm / kmPorCombustivel;

if (tipoCombustivel === `Gasolina`) {
    const totalGastos = litrosGastos * precoGasolina;
    console.log(totalGastos.toFixed(2))
} else {
    const totalGastos = litrosGastos * precoEtanol;
    console.log(totalGastos.toFixed(2))
}

