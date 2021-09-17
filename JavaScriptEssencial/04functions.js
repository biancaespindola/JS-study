//como são declaradas funções

//forma mais tradicional
function fn() {
  return 'sou uma função bem basiquinha';
}

//arrow function com uma exprssão só
const arrowFn = () => 'seu codigo maroto aqui';

//com mais argumentos
const arrowFn2 = () => {
  //expresão
  return 'vários argumentos parça';
}

//funções tem propriedades
fn.prop = 'posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//receber paremetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);