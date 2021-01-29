const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);

console.log(Number.isInteger(peso1));   
//isInteger -> ve se o valor de peso1 é intero ou não (true or false)

const avaliacao1 = 9.282
const avaliacao2 = 4.123

const total = avaliacao1 * peso1 + avaliacao2 + peso2;

const media = total/(peso1 + peso2);

console.log(media.toFixed(2)); 
//toFixed() me pergunta quantas casas decimais quero que apareçam no print 

console.log(media.toString());
//toString() transforma o numero em string