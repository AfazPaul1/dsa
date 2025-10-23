function rotate_by_d_right(arr, d) {
    let n = arr.length-1
    reverse(arr, n-d+1, n)
    reverse(arr, 0, n-d)
    reverse(arr, 0, n)
    return arr
}
function reverse(arr, startIndex, endIndex) {
    while(startIndex < endIndex) {
        [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]]
        startIndex++
        endIndex--
    }
}
 console.log(rotate_by_d_right([1, 2, 2, 7, 3, 4, 5, 6, 6], 3));
//[5,6,6,1,2,2,7,3,4]
//now revers ehwole same logic works for right too