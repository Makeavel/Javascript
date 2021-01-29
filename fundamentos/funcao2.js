// Armazenar uma função em uma Variavel

const imprimirSoma = function (a , b){

    return a + b;
}

console.log("ImprimeSoma:",imprimirSoma(4, 3));

// Armazenando função arrow em uma variavel

const soma = (a,b) => { // => equivale a palavra function
    return a+ b;
}

// retorno implícito

const subtracao = (a,b) => a - b ; 

console.log("Subtração:", subtracao(4,2));