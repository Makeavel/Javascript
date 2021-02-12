let vara = 'a'; // b
let varb = 'b'; // c
let varc = 'c'; // a

const aux = vara ;

vara = varb;
varb = varc;
varc = aux;

[vara , varb , varc] = [varb , varc , vara]; // javascript..... 

console.log( vara , varb , varc);