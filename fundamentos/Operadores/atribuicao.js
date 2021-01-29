const a = 7;
let b = 3;

function printaTudo(b , a){
    console.log("--Full--");
    console.log(soma(b,a));
}

function soma(b , a){  
    console.log("Soma:\t");
    
    return console.log(subtracao(b += a)); // b = b+a
}

function subtracao(b , a){
    console.log("Subtração:\t");
    return console.log(multiplica(b -= a)); // b = b-a
}

function multiplica(b , a){
    console.log("multiplica:\t");

    return console.log(divide(b *= a));
}

function divide(b , a){
    console.log("divide:\t");
    
    return console.log(modulo(b /= a));
}

function modulo( b ){   
    console.log(`modulo de ${b}:\t`);

    if( (b %= 2) == 0 ){ // b = b % 2
        console.log("É par");
    }
    else{
        console.log("É impar");
    }
}

console.log(printaTudo());
