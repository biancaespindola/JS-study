let varA = 'A';
let varB = 'B';
let varC = 'C';
let aux;
console.log("Original", varA, varB, varC);

//maneira anquiquada
aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log("Antigo", varA, varB, varC);

varC = varB;
varB = varA;
varA= aux;

console.log("Original", varA, varB, varC);

//maneira chique
[varA, varB, varC] = [varB, varC, varA];
console.log("Chique", varA, varB, varC);

