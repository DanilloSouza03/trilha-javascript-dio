
const numero = 5;

const isNumeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log(`O número é inválido pois ele é 0`);
} else if (numero === 5) {
    console.log(`O número é inválido pois ele é 5`);
} else if (isNumeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}
