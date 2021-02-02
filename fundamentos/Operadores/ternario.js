
// O ternário é dividido em 3 partes

/*
1- Primeiro uma expressão que retorna true ou false
2- A parte que retorna se a expressão é verdadeira
3- A parte que retorna se a expressão for falsa

                             1            2            3     */
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// outra forma de fazer abaixo:
const resultado2 = nota2 => {
    return nota2 => 7 ? "Aprovado" : "Reprovado"
}

console.log(resultado(7.6));
console.log(resultado(6.4));