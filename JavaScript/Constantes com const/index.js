//Não podemos criar constantes com palavras resevadas
//Constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com número
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não pode modificar o valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero; 
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultadoTriplicado + 5; //Cuidado que irá perder o valor da const
console.log(resultadoTriplicado);