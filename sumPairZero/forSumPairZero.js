function sumPairZero(array) {
    for (let number of array) {
        for (j = 1; j < array.length; j++) {
            if (number + array[j] === 0) {
                return [number,array[j]];
            }
        }
    }
}
result=sumPairZeronode;
console.log(result);