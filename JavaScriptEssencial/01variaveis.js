// para fazer documentação no javascript:

/**
 * @param {very_long_type} name           Description.
 * @param {type}           very_long_name Description.
 */

/**
 * Short description. (use period)
 *
 * @since  x.x.x
 * @access (private, protected, or public)
 *
 * @type     {type}
 * @property {type} key Description.
 *
 * @member   {type} realName
 * @memberof className
 */

//criar uma constante ou variavel
const text = 'aqui temos uma variavel';
console.log(text);

//retorna o tamanho de uma string
const sizeText = text.length;
console.log(`Quantidade de caracteres/tamanho da string ${sizeText}`);

//retorna um array quebrando a srting por um delimitador
const splittedText = text.split('v');
console.log(
  `string que é um array separada por um delimitador ${splittedText}`
);

//busca por um valor e substitiu por outro
const replaceText = text.replace('uma', 'duas');
console.log(`substituição de valor: ${replaceText}`);
