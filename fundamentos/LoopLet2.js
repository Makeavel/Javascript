const funcs = []

for (let j = 0 ; j < 10 ; j++){

    funcs.push(function(){
        console.log(j);
    })
}

funcs[3]();



// Aqui funciona normal porque tá usando let 