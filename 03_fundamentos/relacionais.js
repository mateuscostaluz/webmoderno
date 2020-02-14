/*

    E &&
v e v -> v
v e f -> f
f e ? -> f

    OU ||
v ou ? -> v
f ou v -> v
f ou f -> f

    OU EXCLUSIVO != (XOR)
v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

    NEGAÇÃO LÓGICA !
!v -> f
!f -> v

*/

console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('07)', 3 >= 2)

const d1 = new Date(0) // 1970-01-01T00:00:00.000Z
const d2 = new Date(0)
console.log('09)', d1 === d2) // compara referência de memória, por isso aponta como false
console.log('10)', d1 == d2)  // compara referência de memória, por isso aponta como false
console.log('11)', d1.getTime === d2.getTime) // compara valores (number), por isso aponta como true

console.log('12)', undefined == null)
console.log('13)', undefined === null)