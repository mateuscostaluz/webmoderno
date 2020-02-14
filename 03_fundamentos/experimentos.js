var a = 3
console.log(this.a)
console.log(global.a)

global.b = 123
console.log(global.b)

this.c = 456
this.d = false
this.e = 'teste'
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca: sem var e let!
abc = 3 // nao faça isso em casa!!!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }