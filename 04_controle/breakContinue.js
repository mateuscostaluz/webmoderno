const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // o break não age em cima de um bloco if
              // o break vai agir em cima do bloco mais próximo dele do tipo:
              //                                                             - for
              //                                                             - while
              //                                                             - switch
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // interrompe a iteração atual e avança para a próxima, sem interromper o laço
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // faz com que o break se aplique ao laço externo
                                            // (também rotulado como externo)
        console.log(`Par = ${a},${b}`)
    }
}