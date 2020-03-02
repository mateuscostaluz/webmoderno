const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Massa quebrou o carro, ou seja, .pop remove o último elemento do array.
console.log(pilotos);

pilotos.push('Verstappen'); // .push adiciona um elemento no array, na última possicão.
console.log(pilotos);

pilotos.shift() // remove o Vettel, ou seja, o .shift remove o primeiro elemento do array.
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos); // .unshift adiciona um elemento no array, na primeira posição.

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1); // Massa quebrou o carro novamente. :(
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array a partir do índice 2.
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array a partir do índice 1, mas sem o índice 4.
console.log(algunsPilotos2);