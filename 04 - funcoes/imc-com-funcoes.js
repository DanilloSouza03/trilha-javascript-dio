
function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc (resultadoImc) {
    if (resultadoImc < 18.5) {
        return `Abaixo do peso`;
    } else if (resultadoImc >= 18.5 && resultadoImc < 25) {
        return `Peso normal`;
    } else if (resultadoImc >= 25 && resultadoImc < 30) {
        return `Acima do peso`;
    } else if (resultadoImc >= 30 && resultadoImc < 40) {
        return `Obeso`;
    } else {
        return `Obesidade Grave`;
    }
}

// Main
(function main() {
const peso = 74;
const altura = 1.70;

const resultadoImc = calcularImc(peso, altura);
console.log(`Seu IMC é ${resultadoImc.toFixed(2)} por isso você está ${classificarImc(resultadoImc)}.`)
})();