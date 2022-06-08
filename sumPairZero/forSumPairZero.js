function sumPairZero(array) {
    for (let number of array) {
        console.log(number);
        for (j = 1; j < array.length; j++) {
            console.log(array[j]);
            if (number + array[j] === 0) {
                return [number,array[j]];
            }
        }
    }
}
result=sumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);