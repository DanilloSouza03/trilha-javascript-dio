
const fs = require('fs')

const promessaLeituraDoArquivo = fs.promises.readFile('tarefas.csv')

promessaLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf-8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
       const [nome, feito] = linha.split(';')
       return {
        nome,
        feito: feito === 'true'
       }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => {console.log('Erro na promise', error)})
