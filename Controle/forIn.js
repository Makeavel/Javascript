
// Usar para Array nem vale tanto a pena, mas para Objeto sim

const notas = [6.5, 9.2,2.8,5.9,4.8];

for(let i in notas){  // o IN vai navegando pelos indices e não pelos elementos
console.log(i , notas[i]);
}

const pessoa = {
    nome : 'Laura',
    sobrenome : 'Coelho',
    idade : '27',
    peso : '?',
}

for(let atributo in pessoa ){  // atributo está "navegando" pelos indices do objeto pessoa
    console.log(`${atributo} = ${pessoa[atributo]}`);
}