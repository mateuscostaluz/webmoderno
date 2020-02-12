let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // não testa se a atribuição deu certo ou não, mas o valor atribuído

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // não testa se a atribuição deu certo ou não, mas o valor atribuído

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')