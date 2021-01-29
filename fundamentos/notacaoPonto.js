console.log(Math.ceil(6.1));

const objto1 = {};

// Ele vai autodeclarar o atributo dentro do objeto, mesmo não sendo declarado antes
objto1.nome = 'Monitor';  
console.log(objto1.nome);

function Objeto(nome){
    this.nome = nome;  // this está exportando a váriavel para fora, está tornando visivel pra fora,
                       // sem o this o valor ficaria "preso" dentro da função
    this.mkvl = function() {
        console.log("Doideira...");
    }                   
}

const objeto2 = new Objeto('cadeira');
const objeto3 = new Objeto('mesa');

console.log(objeto2.nome);
console.log(objeto3.nome);
objeto3.mkvl();