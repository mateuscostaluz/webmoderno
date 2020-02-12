let valor // declarado, mas não inicializado
console.log(valor)
// undefined = sem valor atribuído (definido)
// console.log(Valor2) = is not defined (erro, não foi declarado)

valor = null // variável não aponta para endereço de memória algum
             // vazia/ zerar o valor de uma variável/ referência
             // (ausência de valor)
console.log(valor)
// console.log(valor.toString) erro

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir de forma explícita undefined
                          // deixe que a linguagem defina
                          // limpar = utilizar valor padrão, tal como 0 para numérico
                          //          ou mesmo null
console.log(!!produto.preco)
// delete produto.preco para se tirar o atributo de um objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)