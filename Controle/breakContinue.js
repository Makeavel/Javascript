
const notas = [6.5, 9.2,2.8,5.9,4.8];

for (x in notas){

    if(x == 3){
        break;
    }
    console.log(`Indice:${x} Nota: ${notas[x]}`);
}

for(y in notas) {

    if(y == 2){
        continue; // pula 
    }
    console.log(`${y} = ${notas[y]}`);
}

externo:     // NÃO usa essa bagaça 
for(a in notas){
    for(b in notas){
        if(a == 2 && b ==3){
            break externo;
        }
        console.log(`Par = ${a}, ${b}`);
    }
}
