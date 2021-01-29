const valores = [ 7 , 2.4 , 99 , 2];
// array declarado de forma literal

console.log(valores);

valores[5] = 33;
// cria mais uma posição na array

valores[10] = 10;
// cria várias posições até chegar no 10 e anexar o valor

//  Dá para por de tudo em uma array

valores.push({id : 7861}, true , null, 'mklv');

console.log(valores);

// não é bom sair misturando todo tipo de dados num array, mas dá para fazer.... 

// para deletar um valor da array dá para fazer um POP ou usar o DELETE

console.log(valores.pop());

delete valores[2];  // deleta o valor do indice 2

console.log(valores);