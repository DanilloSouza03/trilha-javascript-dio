
class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Danillo'), new Pessoa('Renan'), new Pessoa('Andressa'), new Pessoa('Vitor'), new Pessoa('João')]

const listaNomesEmHtml = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
})

console.log(listaNomesEmHtml)