function checkIfSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            return false
        }
    }
    return true
}
console.log(checkIfSorted([14, 9, 12, 6, 8, 13, 18, 15, 8, 9, 2, 5, 16]));
console.log(checkIfSorted([1,2,3,4,5]));
console.log(checkIfSorted([1,2,3,3,4,4,5]));

