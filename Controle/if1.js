
function NotaAluno(nota){

    let palavra = "Prova";
    let palavra2 = "Nota: ";
    if(nota === 10){
        console.log(palavra , "Gabaritada",palavra2 ,nota);
    }
    else if ( nota === 0){
        console.log(palavra, "Zerada", palavra2 , nota);
    }
    else if( nota > 0 && nota <= 5 ){
        console.log(palavra , "Na média", palavra2 , nota);
    }
    else if(nota > 5 && nota <= 7){
        console.log(palavra, "Muito bom", palavra2 , nota);
    }
    else if(nota > 7 && nota <10){
        console.log(palavra, "Ótimo", palavra2 , nota);
    }
    else{
        console.log("Nota não válida\n");
    }
}

function seForVerdade( valor ){

    if(valor){
        console.log("É verdade mesmo..." + valor);
    }
};

NotaAluno(2);
NotaAluno(10);
NotaAluno(5);
NotaAluno(81);

seForVerdade(55);
seForVerdade("nome");
seForVerdade(); // falso
seForVerdade(0) // falso