
const entrada = ( a , b , c ) => { Verificadora(a, b , c) };

function Verificadora( a , b , c){

    
    a , b , c = isNaN(a , b , c) ? "Entrada Inválida" : a , b , c;

    if (a>=b+c || b>=c+a || c>=a+b){
        var triangulo = "Não é Triangulo";
    }

    else if(a == b && b == c){
        triangulo = "Equilátero";
    }
    else if(a==b || b==c || c==a){
        triangulo = "isosceles";
    }
    else{
        triangulo = "escaleno";
    }

    console.log(triangulo);
}

entrada(5 , 3, 7);