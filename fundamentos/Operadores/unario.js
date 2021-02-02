let num1 = 1;
let num2 = 2;

num1++; // escrever desse jeito faz com que a operação tenha MENOS prioridade
console.log("Soma",num1);

--num1; // escrever desse jeito faz com que a operação tenha MAIS prioridade
console.log("Subt.",num1);

console.log(++num1 === num2--); // retorna true 
                                //porque num2 subtrai só depois da comparação

console.log(num1 === num2); // retorna false
