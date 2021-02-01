// IN, END, NOT , OR

/* É basicamente as aulas de sistemas digitais, tá suave */

/*   TABELA VERDADE    */   

/*|| -> OU 
  && -> AND
  != -> NOT

*/

function compras ( trabalho1 , trabalho2 ){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprartv32 = !!(trabalho1^trabalho2) // ou exclusivo (bit a bit) bitwise Xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    return { comprarSorvete , comprarTv50 , comprarTv32 , manterSaudavel }
}

console.log(compras(true, true));
console.log(compras(true, false));
