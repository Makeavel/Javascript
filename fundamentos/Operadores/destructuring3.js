//      Usando FUNCÃO

// função randomica aqui abaixo
function rand({min = 0 , max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

                //{max : , min : }  -> isso é um objeto
console.log(rand({max : 50 , min : 40 }));
                // outra maneira de fazer:
const objto = {max : 50 , min : 40};

console.log(rand(objto));

// deixar gerar numeros aleatórios ( manda um objeto vazio)
console.log(rand({}));
// Se tentar mandar só rand() vai dar erro na desestruturação,
// tem que ter o objeto, nem que vazio.