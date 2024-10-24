// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2); transforma temporariamente a variavel em string e contatena com a segunda
// num1 = num1.toString(); Altera a variavel para string
// console.log(num1.toString(2)); REPRESENTAÇÃO BINÁRIA
// console.log(num1.toFixed(2)); mostrar somente 2 casas decimais arredondadas
// console.log(Number.isInteger(num1)); Mostra se o número é inteiro ou não
// console.log(Number.isNaN(temp));
// let temp = num1 + '5';