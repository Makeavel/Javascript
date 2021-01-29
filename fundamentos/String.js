const nome = 'cod3';

console.log(nome.charAt(3)) ;
//charAt(3) vai me mostrar a letra do índice 3 da palavra code    0,1,2,3 

console.log(nome.charCodeAt(3));
//charCodeAt(3) vai me retornar o endereço do caractere na tabela ascii

console.log(nome.substring(1));
//substring(1) vai mostrar todos os caracteres a partir do índice 1 

console.log('Pessoa '.concat(nome).concat(' !'));
// .concat concatena o conteudo passado como parametro

console.log(nome.replace(3 ,'a'));
// replace vai substituir o primeiro caractere do parenteses com que vem 
// após a virgula.

console.log('Pessoa,Nomes,Jaja'.split(','));
//split pega uma string e separa ela pelo que estiver dentro do () gerando assim
// uma array 

