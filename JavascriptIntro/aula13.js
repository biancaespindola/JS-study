//váriaveis com let
console.log("\n\n ***** Aula 13: váriaveis com let ***** \n\n")

let nome = 'João';
//usar var é mais antigo, sempre se utiliza let para a criação de variáveis 

console.log(nome, "nasceu em 1984");
console.log("em 2000 " + nome + " conheceu Anna");
//quando se esta concatenando é necessário colocar um espaço, pq é concatenação hehe
console.log(nome, "e Anna se casaram em 2012");
console.log("Anna teve um filho com " + nome + " em 2015");
console.log("O filho de" + nome + "se chama Eduardo");

//da para usar ',' ou concatenar em '+'

//delcarar variáveis usando apenas
let variavel;
// a variavel recebe o valor de undefined como se pode ver
console.log("\n\neu fui declarada sem valor por isso possuo o valor:", variavel);
//mas como toda váriavel seu valor dpode ser alterado
variavel = "agora tenho valor";
console.log("\n\n variavel com valor:", variavel);

//nada de declarar duas vezes a variavel por favor

//regras para a criação de variaveis:
/**
 * > palavras reservadas
 * > precisam ter nomes significativos
 * > não podem começar com numero
 * > não podem conter espaços ou traços
 * > elas são case sensitive
 * >não pdoem ter acentos
 * > esse tutotorial usa camelCase que é usar 'camelCase' na hora de declarar variavel 
 * >> let nomeCompletoDoCliente;
*/ 