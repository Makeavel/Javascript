const soma = function (x , y){

    return x + y;
}

const imprime = function(a,b , operacao = soma){
    console.log(operacao(a,b));
}

imprime(5,2);
imprime(4,7,soma);
               // essa function ai tá fazendo o papel da func soma
imprime(4,9 , function(x,y){ return x - y} );
             // arrow function
imprime(3,7 , (x,y) => x*y );