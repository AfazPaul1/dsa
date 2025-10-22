function rotate_clockwise(arr) {
    let temp = arr[arr.length-1]
    for (let i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = temp
    return arr
}
console.log(rotate_clockwise([1,2,3]));
