// arrays

const pessoa = ['Eu' , 'Ele' , 'Nós' , 78 ];

console.log(pessoa);

//-------------------------------------------------
const num = 'select';
const nam = 'from';
const nem = ' bi..listaprojetos';
const nom = 'where numprj = ';

//Forma alternativa e zuada de fazer uma 'array'...
loty = [(`${num} * ${nam} ${nem} \n${nom} 17202`)];

console.log(loty);
//------------------------------------------------------

//selecionando caracteres específicos na array
console.log(`${num[0]} * ${nam} ${nem} ${nom} 17202`);

 // se eu tiver um array de 3 posições e por acaso fazer um 
 
 //pessoa[4] = 'Makeavel';

 //o array não vai pistolar, ele vai adicionar o Makeavel no fim do array
