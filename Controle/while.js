function InteiroAleatorio(min, max){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while(opcao != -1 ){

    opcao = InteiroAleatorio(-1 , 10);
    console.log(`Num sorteado: ${opcao}`);
}

console.log("\nFim de execução");


