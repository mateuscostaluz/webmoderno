function recursion(array, sizeMin, sizeMax) {
    if(sizeMax > 0 && sizeMax + 1 > sizeMin) {
        recursion(array, sizeMin, --sizeMax)
        array[sizeMax] = sizeMax + 1
        return array
    }
}

console.log(recursion(array = [], 1, 10))