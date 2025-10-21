function second_largest(arr) {
    let max  = arr[0]
    let secondLargest = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            secondLargest = max
            max = arr[i]
        }
    }
    return secondLargest
}

console.log(second_largest([14, 9, 12, 6, 8, 13, 16, 15]));
//14
//3
console.log(second_largest([3,2,1,5,2, 5]));
//console.log(second_largest([7,7,7,7,7]));


