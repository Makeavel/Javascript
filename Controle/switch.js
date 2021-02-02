const imprimirResultado = function (nota){
    let valor = "Nota: ";
    switch(Math.floor(nota)){ // floor arredonda para baixo
        
        case 10: 
            console.log("parabens", valor , nota);
            break;
        case 9: 
            console.log("Foi bom", valor,nota);
            break;
        case 8: 
            console.log("Só foi...", valor, nota);
            break;
         case 6 : case 5 :
          console.log("valor é o mesmo para os 2 cases");
            break;  
        default:
            console.log("Reprovou, aceita", valor, nota);
            break;
    }//switch
}

console.log(imprimirResultado(9.6));

console.log(imprimirResultado(10));

console.log(imprimirResultado(8));

console.log(imprimirResultado(5));

console.log(imprimirResultado(4));