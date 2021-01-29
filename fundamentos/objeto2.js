console.log(typeof Object);  // funcao 
console.log(typeof new Object);  // objeto

const cargo = function(){}

console.log(typeof cargo);       // funcao
console.log(typeof new cargo()); // objeto

class view {}

console.log(typeof view)    // funcao
console.log(typeof new view()) // objeto