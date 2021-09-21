const nome = 'Bianca';
const sobrenome = 'Espindola';
const idade = 25;
const peso = 50;
const altura = 1.50;
let imc = peso / (altura * altura);

console.log(nome, sobrenome, 'tem', idade, 'anos, seu peso é de', peso, 'kilos tem', altura, 'de altura e seu imc é de', imc );
//maneira mais  moderna de imprimir strings usando console.log
console.log(`${nome} ${sobrenome} tem ${idade} anos, seu peso é de ${peso} kg tem algura de ${altura} e seu imc é de ${imc}`);
