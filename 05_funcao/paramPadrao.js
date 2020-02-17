// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 // ainda muito utilizado, para texto (string), por exemplo em variáveis em funções
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // poderia ser utilizado o "!=" para definir o valor padrão também para "null"
    b = 1 in arguments ? b : 1  // verifica se existe o argumento índice 1 (o segundo)
    c = isNaN(c) ? 1 : c        // se o parâmetro não for numérico, pega o valor padrão
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) { // seguro quando se trata de valores numéricos
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

// sempre que puder escolha os recursos mais novos da linguagem (es2015 até então)