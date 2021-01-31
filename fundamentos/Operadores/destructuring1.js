//           ISSO É INSANO !!!!
//          Método usando Objeto 

const pessoa = {    // criei um objeto aqui
    nome : "Laura",
    idade : 28,
    endereco : {
        cidade : "Brasilia",
        bairro : "Noroeste",
        numero : 500,
    }
};


const { nome , idade } = pessoa; // estou transformando os atributos do objeto em váriaveis externas

console.log(nome);
console.log(idade);

const { endereco : { cidade , bairro , numero}} = pessoa;

console.log(cidade , bairro , numero);

// dá para renomear as variaveis 

const { nome : nam , idade : age } = pessoa;

console.log( nam , age);