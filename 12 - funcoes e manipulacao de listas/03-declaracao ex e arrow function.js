// Declaração Explícita
// Arrow Function

function funcao1() {
    console.log(this)
}

const funcao2 = () => {
    console.log(this, '<-Essa é a Arrow Function')
}

const danillo = {
    nome: 'Danillo',
    funcao1,
    funcao2
}

danillo.funcao1()
danillo.funcao2()
