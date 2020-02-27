// CÓDIGO NÃO EXECUTÁVEL!!!

// Procedural
processamento(valor1, valor2, valor3)

// OO
objeto = {
  valor1,
  valor2,
  valor3,
  processamento() {
    // ...
  }
}

objeto.processamento() // Foco passou a ser o objeto

// Principios importantes:
// 1. abstracao -> pegar objeto do mundo real e traduzir para dentro do sistema (simplificacao)
// 2. encapsulamento -> ter os detalhes de implementacao escondidos e mostrar para quem precisa usar apenas uma interface simples
// 3. herança (prototype) -> é um (recebe atributos e comportamentos de um objeto pai)
//                           priorize a composição (tem um) no lugar da herança (é um)
// 4. polimorfismo -> multiplas formas (quando se tem uma variavel pai do tipo mais generico e pode atribuir nessa variavel tipos subtipos)