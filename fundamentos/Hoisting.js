
//   ISSO EXISTE MAS NO DIA A DIA SERVE PRA NADA.... mas é bom saber
//      Não funciona com LET 

// é quando o Javascript "lê" uma váriavel que ainda não foi atribuida
console.log("a = ",a);
var a = 2;
console.log("a = ",a);

/* o resultado é equivalente a essa operação: */

var b;
console.log("\nb = ",b);
b = 2;
console.log("b = ",b);


// se fizer dentro de funções o efeito é o mesmo

function hoisting(){
console.log("\nc = ",c);
var c = 2;
console.log("c = ",c);
}

hoisting();