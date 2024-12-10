//Factory Function (Função Fábrica)
function criaPessoa (nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Luiz', 'Miranda', 1.80, 80);
const p2 = criaPessoa('Otávio', 'Miranda', 1.6, 42);

console.log(p1.imc());
console.log(p2.imc());