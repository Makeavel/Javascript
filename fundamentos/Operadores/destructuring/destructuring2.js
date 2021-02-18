//      Dentro de uma ARRAY

const [a] = [10];
console.log(a);

const [ n1, , n3 , , n5 , n6 = 0] = [10, 7 , 9 , 8]; // ele vai atribuir o 7 e o 8 aos elementos vazios
console.log(n1,n3,n5,n6);   // 10, 9, undefined, 0

