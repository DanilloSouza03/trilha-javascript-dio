
const pessoa = {
    nome: 'Danillo',
    idade: 20
}


function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, [`Olaaa`])
gritar.call(pessoa, 'Olaaa')

