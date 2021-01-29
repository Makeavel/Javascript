
//                    012345 6789
let stringQualquer = `Sierra Papa`;

//para contar qtd de caracteres ou um endereço em especifico
//dá para usar o charAt(3)

console.log(stringQualquer.charAt(3)); 

// se quiser achar o incice de uma string / palavra só usar o indexOf

console.log(stringQualquer.indexOf('Papa')); // indice 6

// o lastindexOf começa a buscar de tras para frente

console.log(stringQualquer.lastIndexOf('Papa')); // indice 6

console.log(stringQualquer.replace('Sierra' ,' Romeo' ));
// subistui um valor po outro 

console.log(stringQualquer.replace(/a/g, 'y'));
//colocando o G ali dentro ro replace, ele vai mutar todos os A da string

//ver tamanho da string  length
console.log(stringQualquer.length);

// vendo um ponto expecifico da string
console.log(stringQualquer.slice(6,8)); //Pap

// dividir string com base em um caractere especial
console.log(umaString.split(' ')); // vai separar pelos espaços

