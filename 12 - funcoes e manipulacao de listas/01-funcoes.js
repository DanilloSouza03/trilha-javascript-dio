// First Class

function falarMeuNome() {
    console.log(`Meu nome é Danillo`)
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log(`Souza Pereira`)
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome) ()

