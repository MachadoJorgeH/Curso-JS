// (condicao) ? 'verdadeiro' : 'falso'
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário comum';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);