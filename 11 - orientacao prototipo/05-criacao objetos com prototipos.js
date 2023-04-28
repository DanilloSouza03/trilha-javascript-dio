
const pessoa = {
    genero: 'masculino'
}

const danillo = Object.create(pessoa)

danillo.nome = 'Danillo'

console.log(danillo.genero);
