
const pessoa = {
    genero: 'Masculino'
}

const danillo = { 
    nome: 'Danillo',
    idade: 20,
    __proto__: pessoa
}

console.log(danillo.genero)