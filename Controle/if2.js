Number.prototype.entre = function(inicio , fim){
    return this >= inicio && this <= fim;
}

const imprimeResultado = function(nota){

    if(nota.entre(9,10)){
        console.log("Parabéns");
    }
    else if(nota.entre(8,6)){
        console.log("Muito bom");
    }
    else if(nota.entre(5,5)){
        console.log("Foi raspando");
    }
    else if(nota.entre(4, 0)){
        console.log("Reprovado");
    }
    else{
        console.log("Inválido");
    }
    
}

console.log(imprimeResultado(7));

console.log(imprimeResultado(10));

console.log(imprimeResultado(2));

console.log(imprimeResultado(5));