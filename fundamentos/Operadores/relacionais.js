console.log("1º teste:", '1' == 1);

console.log('2º teste:', '1' === 1); // 3 = referece a se é estritamente igual

console.log("3º teste:", '3' != 3);

console.log('4º teste:', '3' !== 3); // != = referece a se é estritamente diferente

console.log("5º teste:", 3 < 1);

console.log("6º teste:", 3< 1);

console.log('7º teste:', 3 <= 2);

console.log('8º teste:', 3 >= 2);

const d1 = new Date(0);

const d2 = new Date(0);

console.log("9º teste:", d1 === d2);
console.log("10º teste:", d1 == d2);

console.log("11º teste:", d1.getTime() === d2.getTime());
console.log("11.5º teste:", d1.getTime() == d2.getTime());

console.log("12º teste:", undefined == null);
console.log("13º teste:", undefined === null);
