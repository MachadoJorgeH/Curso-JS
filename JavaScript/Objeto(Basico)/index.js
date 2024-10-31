/*const pessoal1 = {
    nome:  'João',
    sobrenome: 'Miranda',
    idade: 30,
    peso: 84,
    altura: 1.80,
};

console.log(pessoal1.nome);
console.log(pessoal1.sobrenome);
console.log(pessoal1.idade);
*/
/*function criaPessoa (nome, sobre, idade) {
    return {
        nome: nome,
        sobre: sobre,
        idade: idade
    };
}
*/
function criaPessoa (nome, sobre, idade) {
    return { nome, sobre, idade};
}
const pessoal1 = criaPessoa('Luiz', 'Miranda', 30);
console.log(pessoal1);