function rand([max = 1110 , min = 0]){

    if (max < min)
        [max , min] = [min, max];
    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor);
}

console.log(rand([50,40]));
console.log(rand([100])); //só passando o primeiro parametro (max)
console.log(rand([,30])); //só passando o segundo paramentro (min)
console.log(rand([]));    //vazio executa no padrão já declarado antes (max = 0 , min= 1000)