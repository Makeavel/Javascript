    // Nos três casos é tudo a mesma coisa, só muda a escrita
    // é uma função mais simples como exemplos:

let dobraValor = function(a) {
    return 2 * a;
};

dobraValor = (a) => {
    return 2 * a;
};

dobraValor = a => 2 * a; // return implícito

console.log(dobraValor(Math.PI));

let palavra = function(){
    return "PETR4"
};

palavra = () => "PETR4";

console.log(palavra());