let user = {
  name: 'Bianca'
};

console.log('propriedade name do objeto user:', user.name);

//alterando a propriedade de um objeto
user.name = 'Bibi';
console.log('propriedade name do objeto user:', user.name);

user['name'] = 'outra bibi';
console.log('propriedade name do objeto user:', user.name);

const prop = 'name';
user[prop] = 'outra bibi 2.0';
console.log('propriedade name do objeto user:', user.name);

//criando uma propriedade
user.lastName = 'de Espindola';
console.log('propriedade lastName do objeto user:', user.lastName);

//deletando uma propriedade de
delete user.name;

