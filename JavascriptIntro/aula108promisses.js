function randomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function testPromises(msg, timeMsg) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');
    setTimeout(() => {
      resolve(msg);
    }, timeMsg);
  });
}

testPromises('Bom dia', randomNumber(1, 3))
  .then(msg => {
    console.log(msg);
    return testPromises('o Sol já nasceu', randomNumber(1, 3)); 
  })
  .then(message => {
    return message + ' lá na fazendinha';
  })
  .then(message => {
    console.log(message);
    return testPromises('Acorda o bizerro', randomNumber(1, 3));
  })
  .then(message => {
    return  message + ' e a vaquinha';
  })
  .then(message => {
    console.log(message);
  })
  .then(() => {
    console.log('que já cocoricou dona galinha');
  })
  .then(message => {
    console.log(message);
    return testPromises(15, randomNumber(1, 3));
  })
  .catch(e => {
    console.log('ERRO:', e);
  });

// testPromises('lá na fazendinha', randomNumber(1, 3));
// testPromises('Acorda o bizerro', randomNumber(1, 3));
// testPromises('e a vaquinha', randomNumber(1, 3));

//mas eles não são execultados na ordem apra resolver isso vem as promisses

/**
 * muito util para ser usado na cominicação com o banco de dados
 * ocorre em aprelelo com o resto do processamentop do codigo
 * 
 */
