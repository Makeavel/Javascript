
var peso = 84 ;
var altura = 1.8 ;
let nome;
let idade = 23; 
var imc;
nome = 'Makeavel';
imc = (peso/(altura*altura))
const ano = 2020 - idade;


console.log(nome + ' tem ' + idade + ' anos, pesa '+ peso + 'kg e tem ' , altura , 'e seu IMC é de ' + imc)
console.log(nome + ' nasceu em: ' + ano);

//outro jeito de escrever é usando o ${variavel aqui dentro} , mas para isso tem que usar a crase  ` string aqui dentro ` 
// melhor usar o jeito de baixo mesmo, não precisa usar o + para juntar as stings, é uma só.

console.log(`${nome} tem ${idade} anos, pesa ${peso} Kg e tem ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${ano}`);