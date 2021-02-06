// estratégia 1 para gerar valor padrão
function soma1(a , b , c){  // melhor usar o 2º argumento do que isso
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log("Soma1:",soma1(), soma1(3) , soma1(1 , 2 , 3) , soma1(0,0,0));

// estratégia 2 , 3 e 4 para gerar valor padrão

function soma2(a, b , c ){
/*2º*/a = a !== undefined ? a : 1;
/*3º*/b = 1 in arguments ? b : 1;  // Aqui o arguments verifica o índice do argumento ( b = 1)
/*4º*/c = isNaN(c) ? 1 : c;       // MAIS SEGURO pois verifica se é numero 

    return a + b + c;
}

console.log("Soma2:",soma2(), soma2(3) , soma2(1 , 2 , 3) , soma2(0,0,0));


// valor padrão e2015

function soma3 ( a= 1 , b = 1 , c = 1){

    return a + b + c;
}


console.log("Soma3:",soma3(), soma3(3) , soma3(1 , 2 , 3) , soma3(0,0,0));

function validadorUsuario(a  , b ){

    a = a !== "Logado" ? "Anonimo" : "PH";
    b = b == "Cadastrado" ? "Bem-Vindo" : "Cadastre-se";
    console.log("\n", a , "\n", b);
}

console.log(validadorUsuario("Logado", "Cadastrado"));