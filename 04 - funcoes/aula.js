

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcresimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcresimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
