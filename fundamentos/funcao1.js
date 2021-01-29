// Função sem retorno

function imprimirSoma(a , b){

    console.log(a + b);
    a = a * 2 + b;
    console.log(a);
    
}

imprimirSoma(3 , 6);
imprimirSoma(3); // Retorna Not a Number (NaN)

// Função com retorno

function Soma( a , b  = a){

    return a + b
}

console.log( Soma(4,6) ); 
console.log( Soma(4) ); // B vai receber o valor de A