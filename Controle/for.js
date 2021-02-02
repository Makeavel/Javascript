let contador = 1;

    console.log("While:\n");
while(contador <= 10){

    console.log(`Contador: ${contador}`);
    contador++;
}

    console.log("\nFor\n");
for (let i = 1 ; i <= 10 ; i++){

    console.log(`Contador: ${i}`);
}

const notas = [6.5 , 4.7 , 9.1 , 7.2];

let j = 1
for(let i = 0 ; i <= notas.length ; i++){  // length verifica até o tamanho do array, arquivo.... 
    
    if(notas[i] >= 5){
        console.log(j++,`º nota: ${notas[i]}`);
    }
    
}