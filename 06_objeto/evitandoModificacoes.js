// Objetct.preventExtensions -> previne que o objeto seja extendido
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promocao'
});

console.log('Extensível:', Object.isExtensible(produto));
produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal -> impossibilita a adição e deleção de atributos em objetos
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze -> selado + valores constantes