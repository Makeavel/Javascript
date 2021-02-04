// função em JS é First-class Object (citizens)
// Higher-order function

// criar de forma literal

function fun1 (entrada){

};

// Armazenar em uma variavel

const fun2 = function( ) { } // função anonima

// armazenar em um array

const array = [ 
        function( a , b) {
            return (a + b);
        },
        fun1,
        fun2 
];

console.log(array[0](2,4));

// armazenar em um atributo de Objeto

const obj = {};

obj.falar = function() {return "Oi..."};
console.log(obj.falar());

// passar funcao como parametro

function run (fun){
    fun();
}

function oi (){ console.log("\nSegura Peão\n")}

run(oi);

// retornar uma função dentro de uma função

function soma(a,b){
    return function (c){
        console.log(a + b + c);
    }
}

soma(2,6)(4);  // OU
const Cinco = soma(2,6); // crio uma váriavel...
Cinco(4);