function left_rotate(arr) {
    let temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i]
    }
    arr[arr.length-1] = temp
    return arr
}
console.log(left_rotate([1, 2, 4]));
//[ 2, 4, 1 ]
