const a = 7;
let b = 3;


console.log(printaTudo(b , a));


function printaTudo(b , a){
    console.log("--Full--");
    soma(b,a);
}

function soma(b , a){  
    console.log("Soma:\t");
    console.log(b += a);
    return subtracao(b , a); // b = b+a
}

function subtracao(b , a){
    console.log("Subtração:\t");
    console.log(b -=a );
    return multiplica(b , a); // b = b-a
}

function multiplica(b , a){
    console.log("multiplica:\t");
    console.log( b *= a);
    return divide(b , a);
}

function divide(b , a){
    console.log("divide:\t");
    console.log( b /= a);
    return modulo(b);
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

