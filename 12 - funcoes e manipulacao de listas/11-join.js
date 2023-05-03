
const lista = [{nome: 'Danillo'}, {nome: 'Andressa'}, {nome: 'Thais'}, {nome: 'Renan'},{nome: 'Amanda'}]


const elementoEmHtml = lista
    .filter((e) => e.nome.startsWith('A'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementoEmHtml)