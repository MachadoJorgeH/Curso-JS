//Global
function retornaFuncao(nome) {
        return function () {
            return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Otávio');

console.dir(funcao());
console.dir(funcao2());
console.log(funcao(), funcao2());