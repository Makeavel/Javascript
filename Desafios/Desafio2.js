//                   *****************  DESAFIO  *********************
 
// Fazer um programa que seja capaz de mostrar a área de figuras

quadrado(4);
circulo(3);
retangulo(4,10);
triangulo(4,9);
losango(4,6);

function quadrado(lado){

    const resultado = lado * 4;
    return console.log(`Quadrado: ${printa[resultado]}`);
}

function circulo(raio){

    const resultado = Math.PI * Math.pow(raio,2);
    
    console.log(resultado);
    return printa(resultado);
}

function retangulo(base, altura){

    const resultado = (base * altura);
    return printa(resultado);
}

function triangulo(base , altura){

    const resultado = (base * altura)/ 2;
    return printa(resultado);
}

function losango(diagonal1 , diagonal2){

    const resultado = (diagonal1 * diagonal2)/2;
    return printa(resultado);
}

function printa(resultado){

    console.log(resultado);
}

