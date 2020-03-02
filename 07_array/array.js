console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
aprovados.push('Abia'); // -> mais apropriado para adicionar elementos, sem sobrepor
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // -> ordena o array, alterando o array original
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados.indexOf('Ana'));
aprovados.splice(1, 1, 'Elemento1', 'Elemento2');
// exclui 1 elemento a partir do elemento 1 (no caso o valor 'Carlos')
// e adiciona (a partir do elemento 1) os valores 'Elemento1' e 'Elemento2'
// sem sobrescrever o valor 'Ana', mas mantendo-o no final (alterando sua posicao -> index)
console.log(aprovados.indexOf('Ana'));
console.log(aprovados);