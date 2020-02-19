console.log(soma(3, 4))
// function declaration
// mesmo na linha antes desta declaração, é possível efetuar a chamada desta função
function soma(x, y) {
    return x + y
}

// function expression
// o mesmo não ocorre para esta função, é preciso que ela seja declarada antes
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
// o mesmo não ocorre para esta função, é preciso que ela seja declarada antes
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))