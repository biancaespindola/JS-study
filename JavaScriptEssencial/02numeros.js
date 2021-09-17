const number = 12.4032;
console.log("numero original:", number);

//transformar número em string
const numberAsString = number.toString();
console.log("\n número como string: " + numberAsString + " tipo da constante: " + typeof numberAsString);

// Retorna número com número de casas decimais
const numberTwoDecimals = number.toFixed(2);
console.log("\n Número com apenas duas casas decimmais:", numberTwoDecimals);

// Tranforma uma string em float
console.log("\nString para float:", parseFloat('13.24'));

//Transforma string em inteiro
console.log("\nString para int:", parseInt('13.24'));