const nome = 'paulo';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá 
    ${nome}!`;

console.log(concatenacao, template); 

//Quando vou usar o template posso fazer quebra de linha usando a ` `

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')} ai!`);
