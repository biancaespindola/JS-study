/** Design patterns
 * 
 * Definição:
 * Design patterns ou padrões de projeto são soluções generalistas para problemas
 * recorrentes durante o desenvolvimento de um software. Não se trata de um
 * framework ou um código pronto, mas uma definição de alto nível de como um
 * problema comum pode ser solucionado
 * 
 * Formato de um pattern:
 *  > Nome
 *  > Exemplo
 *  > Contexto
 *  > Problemas
 *  > Solução
 * 
 * Tipos:
 *  > Criação
 *  > Estruturais
 *  > Comportamentais
 * 
 * Padrões de criação:
 * Os padrões de criação são aqueles objetos que abstraem e/ou adiam o processo
 * de criação de objetos. Eles ajudam a tornar um sistema independente de como
 * seus objetos são criados, compostos e representados
 * 
 * > Abstract Factory
 * > Builder
 * > Factory Method 
 * > Prototype
 * > Singleton
 * 
 * Padrões estruturais:
 * os padrões estruturais se preocupam cm a forma como classes e objetos são 
 * compostos para formar estruturas maiores
 * 
 * > adapter
 * > Bridge
 * > Composite
 * > Decorator
 * > Facade
 * > Business Delegate
 * > Flyweight
 * > Proxy 
 * 
 * Padrões comportametais: 
 * Os padrões de comportamento se concentram nos algoritmos e atribuições de 
 * responsabilidades entre os objetos. Eles não descrevem apenas padrões de 
 * objetos ou de classes, mas também os padrões de comunicação entre os objetos
 * 
 * > Chain of Responsibility
 * > Command
 * > Interpreter
 * > Iterator
 * > Mediator
 * > Observer
 * > State
 * > Strategy
 * > Visitor
 * 
 * Patterns mais utilizados:
 *  > Factory 
 *  > Singleton
 *  > Decorator
 *  > Observer
 *  > Module 
 */

/**
 * Factory:
 * Todas as funçõez que retornam um objeto, sem a necessidaded de chamá-las
 * com o new, são consideradas funç~ies Factory(de fábrica mesmo)
 * > podem ter propriedades estaticas ou ser definido atributos
 */

function FakeUser (customProperties) {
  return {
    name: 'Bianca',
    lastName: 'Espindola',
    ...customProperties
  }
}

//Factory
const defaultUser = FakeUser();
console.log(defaultUser);

//Factory
const user = FakeUser({name: 'Custom name', lastName: 'Custom lastName', age: 'Custom age'});
console.log(user);

/**
 * Sigleton:
 * O objetivo desse pattern é criar uma única instância de uma função construtora
 * e retorná-la toda vez em que for necessário utilizá-la.
*/