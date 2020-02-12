for (let i = 0; i < 10; i++) {
    console.log(i)
}

// console.log('i =', i) -> erro, let não permanece disponível após o laço

// reutilizando o valor de i após o laço, útil em alguns casos
let i = 0

for (; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)