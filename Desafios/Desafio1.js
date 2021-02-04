//                   *****************  DESAFIO  *********************
 
// Fazer um programa que gere numeros randomicos não repetidos no intervalo de -1 até 10, 
//até que o valor -1 apareça, ao aparecer o programa deve ser finalizado e os resultados
// devem ser printados.


function criaValorRandom( min , max ){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

function validaEntrada(lista , valor){

    if(lista.indexOf(valor) === -1){
        lista.push(valor);
    }
    else if(lista.indexOf(valor) > -1){
        return 1;
    }
}

function rodaAew(lista){ 
    for(let bow = 0 ; bow < lista.length ; bow++){
    
        console.log(`Num Sorteado: ${lista[bow]}`);
    }
}

let opcao = 0;
let lista = [];

while(opcao != -1){

    opcao = criaValorRandom(-1,10);

    validaEntrada(lista , opcao);
}

rodaAew(lista);

console.log("\nFim de execução");
