var teste1;

function teste2() {
    console.log('teste 2');
}

teste1();
teste2();

teste1 = function() {
    console.log('teste 1');
}

// Hoisting Joga as declarações para cima, porém não as atribuições. 