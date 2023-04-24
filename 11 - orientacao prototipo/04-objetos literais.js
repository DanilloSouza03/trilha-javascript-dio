
const pessoa = {
    genero:'Masculino'
}


const danillo = {
    nome: 'Danillo',
    __proto__: pessoa
}

console.log(danillo.genero);