const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))       // valor vazio
console.log(escola.charCodeAt(3))   // valor dentro da tabela unicode
console.log(escola.indexOf('3'))    // retorna a posição do vetor do texto procurado

console.log(escola.substring(1))    // imprime da posição declarada até o final
console.log(escola.substring(0, 3)) // imprime de uma posição declarada até outra posição declarada
                                    // SEM IMPRIMIR A OUTRA POSIÇÃO DECLARADA

console.log('Escola '.concat(escola.concat("!"))) // string aceita literal para chamar funções
console.log('Escola ' + escola + "!")             // outra maneira de concatenar
console.log(escola.replace(3, 'e'))               // substitui o caractere declarado anteriormente pelo outro caractere declarado
console.log(escola.replace(/\w/g, 'e'))           // ler sobre expressões regulares -> regex

console.log('Ana,Maria,Pedro'.split(',')) // declara o que será usado como separador
console.log('Ana,Maria,Pedro'.split(/,/)) // declara o que será usado como separador (regex)