function Pessoa(nome) {
    this.nome = nome // se não utilizar "this.nome = nome" não será possível alterar o atributo

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`) // pode ser utilizado sem o "this.nome"
    }
}

p1 = new Pessoa('João')
p1.falar()