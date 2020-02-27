// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof (Object), typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras -> mesma função que Object em JS, mas criada pelo programador
function Produto(nome, preco, desc) {
  this.nome = nome // quando se usa o .this a variável fica visível pra fora do objeto
  // quando não se declara o atributo como .this, torna-se privado
  this.getPrecoComDesconto = () => { // método pertence `instância, tal como o atributo
    // preco = 123 -> dentro do objeto é possível manipular variáveis privadas! -> WARNING!
    return preco * (1 - desc)
  }
  this.getPreco = () => { console.log(this.preco, preco) }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
p1.preco = 123 // acopla um atributo público com o mesmo nome do privado, mas mantém o atributo privado -> WARNING! 
p1.getPreco()
p1.nome = 'Caneca'
console.log(p1)
console.log(p1.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

// Níveis de visibilidade das coisas em JavaScript:
// - Global/Window
// - Módulo (próŕio arquivo)
// - Função
// - Let/Const -> Bloco