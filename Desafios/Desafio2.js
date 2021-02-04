//                   *****************  DESAFIO  *********************
 
// Fazer um programa que seja capaz de mostrar a área de figuras

quadrado(4);
circulo(8);
retangulo(4,10);
triangulo(4,9);
losango(4,6);

function quadrado(lado){

    const resultado = lado * 4;
    console.log("Quadrado:");
    return printa(resultado);
}

function circulo(raio){
    let potencia = Math.pow(raio,2);
    const resultado = Math.PI * potencia;
    console.log("Circulo:");
    return printa(resultado.toFixed(0));
}

function retangulo(base, altura){

    const resultado = (base * altura);
    console.log("Retangulo:");
    return printa(resultado);
}

function triangulo(base , altura){

    const resultado = (base * altura)/ 2;
    console.log("Triangulo:");
    return printa(resultado);
}

function losango(diagonal1 , diagonal2){

    const resultado = (diagonal1 * diagonal2)/2;
    console.log("Losango:");
    return printa(resultado);
}

function printa(resultado){

    console.log(resultado,"\n");
}

