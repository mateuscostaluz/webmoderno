const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa))   // chaves
console.log(Object.values(pessoa)) // valores
console.log(Object.entries(pessoa))// registros (chaves e valores)

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { // usando destructuring
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,   // define se o elemento sera enumerado na lista de chaves e valores
  writable: false,    // define se o valor pode ou nao ser sobrescrito
  value: '01/01/2019' // valor padrao
})

pessoa.dataNascimento = '01/01/2017' // incapaz de alterar por conta da definicao em property
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
Object.assign(dest, o1, o2)             // concatena em um objeto de destino os atributos dos outros objetos passados e sobrescreve caso exista algum atributo em comum
const obj = Object.assign(dest, o1, o2) // um objeto também pode receber (atribuição) desta concatenação
console.log(dest)
console.log(obj)

Object.freeze(obj)
obj.c = 1234 // nao altera por conta do freeze acima
console.log(obj)