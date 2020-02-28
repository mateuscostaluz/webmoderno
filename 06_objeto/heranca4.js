function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

/*
 * MeuObjeto é função que tem um atributo prototype que aponta para
 * MeuObjeto.prototype que é um objeto mesmo que pode ter atributos
 * MeuObjeto.prototype tem um protótipo __proto__ que é um
 * Object.prototype
 * MeuObjeto, que é uma função, também, além de ter um atributo prototype, tem um
 * Prototype dele __proto__ que aponta para
 * Function.prototype que, por sua vez, aponta para
 * Object.prototype
 */