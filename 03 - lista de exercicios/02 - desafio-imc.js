/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

const peso = 20;
const altura = 1.70;

const resultadoImc = peso / (altura * altura);

console.log(`Seu IMC é ${resultadoImc.toFixed(2)}`)

if (resultadoImc < 18.5) {
    console.log(`Abaixo do peso`);
} else if (resultadoImc >= 18.5 && resultadoImc < 25) {
    console.log(`Peso normal`);
} else if (resultadoImc >= 25 && resultadoImc < 30) {
    console.log(`Acima do peso`);
} else if (resultadoImc >= 30 && resultadoImc < 40) {
    console.log(`Obeso`);
} else {
    console.log(`Obesidade Grave`);
}