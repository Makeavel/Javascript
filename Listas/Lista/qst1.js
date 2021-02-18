
const entrada = function(x ,y){

    soma(x,y);
    subtracao(x,y);
    multiplica(x,y);
    divide(x,y);

}

const soma = (x, y) =>  console.log(x + y);

const subtracao = (x,y) => console.log(x - y);

const multiplica = (x,y) => console.log(x * y);

const divide = (x,y) => console.log(x / y);

entrada(4,6);