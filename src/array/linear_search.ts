function linear_search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return i
        }
    }
    return -1
}
console.log(linear_search([7, 0, 4, 5, 0, 0, 6, 1, 2, 2], 5));
console.log(linear_search([7, 0, 4, 5, 0, 0, 6, 1, 2, 2], 90));
