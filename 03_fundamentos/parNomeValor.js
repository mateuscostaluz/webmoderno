// par nome/valor
const saudacao = 'Opa' // contexto léxico (palavra) 1 -> nível do arquivo, no caso
                       // local no qual a variável foi definida fisicamente no código
                       // poderia ser definido no browser, no contexto global -> objeto window

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)