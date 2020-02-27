// pessoa -> 123 (endereço de memória) -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 (endereço de memória) -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // congela o estado do objeto, tornando-o um objeto constante

pessoa.nome = 'Maria' // não altera o valor do atributo nome do objeto pessoa
pessoa.end = 'Rua ABC'// não adiciona o atributo ao objeto pessoa
delete pessoa.nome    // não deleta o atributo nome do objeto pessoa

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria' // não altera o valor do atributo nome, visto que este encontra-se congelado
console.log(pessoaConstante)