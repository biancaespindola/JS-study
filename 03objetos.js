let user = {
  name: 'Bianca'
};

console.log('propriedade name do objeto user:', user.name);

//alterando a propriedade de um objeto
user.name = 'Bibi';
console.log('propriedade name do objeto user:', user.name);

//como array
user['name'] = 'outra bibi';
console.log('propriedade name do objeto user:', user.name);

//como uma variavel
const prop = 'name';
user[prop] = 'outra bibi 2.0';
console.log('propriedade name do objeto user:', user.name);

//criando uma propriedade
user.lastName = 'de Espindola';
console.log('propriedade lastName do objeto user:', user.lastName);
console.log('chaves do objeto user:', Object.keys(user));
console.log('valores do objeto user:', Object.values(user));
console.log('entradas do objeto user:', Object.entries(user));


//deletando uma propriedade de
delete user.name;
console.log('propriedades do objeto user:', Object.keys(user));


