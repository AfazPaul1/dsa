function second_largest(arr) {
    let max  = arr[0]
    let secondLargest = -1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max=arr[i]
    }
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] !== max && arr[j] > secondLargest) secondLargest = arr[j]
    }
    return secondLargest
}

console.log(second_largest([14, 9, 15, 12, 6, 8, 13, 16]));
console.log(second_largest([3,2,1,5,2, 5]));
//console.log(second_largest([7,7,7,7,7]));


