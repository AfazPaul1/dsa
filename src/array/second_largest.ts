function second_largest(arr) {
    arr.sort((a, b) => a-b)
    return arr[arr.length-2]
}

console.log(second_largest([14, 9, 15, 12, 6, 8, 13, 15]));
console.log(second_largest([3,2,1,5,2, 5]));

