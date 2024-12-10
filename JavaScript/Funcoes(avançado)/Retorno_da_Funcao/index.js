// return
// Retorna um valor
// Termina a função
function soma(a, b) {
    return a + b;
}
const resultado = soma(5, 10);
console.log(resultado);

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}
const duplicar = criaMultiplicador(2);
const triplicar = criaMultiplicador(3);
const quadriplicar = criaMultiplicador(4);
console.log(duplicar(2));
console.log(triplicar(2));
console.log(quadriplicar(2));