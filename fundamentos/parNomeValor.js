//    par Nome/Valor    ou Chave/Valor

const saudacao = "Opa";  // contexto léxico 1
//     nome       valor

function exec() {
    const saudacao = "Fala aew";  // contexto léxico 2
    return saudacao;
}

// Objetos são grupos alinhados de pares nome/valor

const cliente = {
    nome : "Makeavel",
    idade : 99,
    peso : "70Kg",
    endereco : {
        bairro : "Asa Sul",
        quadra : "Sqs 213",
        numero : 999
    }
}

console.log(saudacao);
console.log(exec());
console.log("Cliente :\n",cliente.nome ,"\n",cliente.endereco);