const funcs = []

for (var j = 0 ; j < 10 ; j++){

    funcs.push(function(){
        console.log(j);
    })
}

funcs[3]();

// problema do javascript... só vai mostrar o 10 , era para mostrar 3 pela lógica,
 // se usar let é gg 