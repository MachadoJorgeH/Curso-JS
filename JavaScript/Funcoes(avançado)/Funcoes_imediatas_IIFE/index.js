// IIFE -> Immediately Invoked Function Expression
(function () {
    const nome = 'Luiz';
    console.log(`Meu nome é ${nome}`);
    console.log('Sera executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

const nome = 'Otávio';
console.log(`Meu nome é ${nome}`);