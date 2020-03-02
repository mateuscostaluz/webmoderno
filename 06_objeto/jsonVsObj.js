const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj)); // -> formato textual

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"));
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"));
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));

console.log(JSON.parse(`{
	"nome": "Teste",
	"idade": 56,
	"legal": true,
	"filhos": [{
		"nome": "Junior",
		"idade": 18
	}, {
		"legal": false
	}]
}`));

// https://jsonlint.com/ -> validador (e formatador) de JSON