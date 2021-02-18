const fabricas = ["mercedes" ,"Bugatti", "Bmw"];

function imprimir(nome , indice){
    console.log(`${indice + 1} - ${nome}`);

}
        // a cada elemento da array forEach vai percorrendo a array e printando mensagem e indice dela
fabricas.forEach(imprimir);

