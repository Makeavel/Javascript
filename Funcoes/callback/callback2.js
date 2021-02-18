const notas  = [5.7 , 3.9 , 8.4 , 6.1 , 9.7 , 7.1];

// Sem callback
let notabaixa = [];

for(let i in notas){
    if(notas[i] < 7.0){
        notabaixa.push(notas[i]);
    }
}
console.log("1.",notabaixa);

// Com callback

notabaixa1 = notas.filter(function(nota){return nota < 7})

console.log("2.",notabaixa1);

// Melhor ainda

//const menorQue7 = nota => nota < 7 ;
notabaixa2 = notas.filter(nota => nota < 7) //substitui por menoQue7 

console.log("3.", notabaixa2);