

const promessaNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 2000)
})

console.log('espere 2 segundos')

promessaNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Finalizou!!')
    })