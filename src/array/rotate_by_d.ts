//either left or right
function rotate_by_d(arr, d) {
    let temp = arr.slice(0, d)
    let n = arr.length
    d = d%n
    for (let i = d; i < n; i++) {
        arr[i-d] = arr[i]
    }
    for (let j = n-d; j < n; j++) {
        arr[j] = temp[j-(n-d)]
    }
    return arr
}
console.log(rotate_by_d([1, 2, 2, 7, 3, 4, 5, 6, 6], 3));
//[7, 3, 4, 5, 6, 6, 1, 2, 2]