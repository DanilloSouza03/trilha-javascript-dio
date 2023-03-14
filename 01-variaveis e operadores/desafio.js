/*Faça um programa para calcular o valor de uma viagem.

Você terá três variaveis. Sendo elas: 
    - 1 Preço do combustível; 
    - 2 Gasto médio de combustível do carro por KM;
    - 3 Distância em KM da viagem;

Imprima no console o valor que será gasto de para realizar esta viagem.
*/
// usei const por não ter como inserir os valores. (igual foi sugerido no curso)
const precoCombustivel = 4.59;
const kmPorCombustivel = 15;
const distanciaKm = 100;

const litrosGastos = distanciaKm / kmPorCombustivel;
const totalGastos = litrosGastos * precoCombustivel;

console.log('Você gastou', litrosGastos.toFixed(2), 'litros e a viagem inteira custo R$', totalGastos.toFixed(2));