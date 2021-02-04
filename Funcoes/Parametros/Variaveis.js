function soma() {
    let soma = 0;
    for (i in arguments){   // argumento interno, toda função tem disponível
                        // quando nenhum parametro é passado "arguments" está vazio
        soma += arguments[i];  // ai aqui ele tá somando e jogando na array
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1,6.4,3.8));

console.log(soma('a' , 'Mkv', 3));