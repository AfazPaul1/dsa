//either left or right
function rotate_by_d(arr, d) {
    let n = arr.length
    d=d%n
    reverse(arr, 0, d-1)
    reverse(arr, d, n-1)
    reverse(arr, 0, n-1)
    return arr
 }
 console.log(rotate_by_d([1, 2, 2, 7, 3, 4, 5, 6, 6], 3));
 console.log(rotate_by_d([1, 2, 2, 7, 3, 4, 5, 6, 6], 30));
//[7, 3, 4, 5, 6, 6, 1, 2, 2]
function reverse(arr, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return arr
    }
    [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]]
    //return reverse(arr, startIndex++, endIndex--) // When the JavaScript engine evaluates startIndex++ as a function argument, it uses the original value of startIndex for the function call first. will result in stack overflow cause the value never changed stays 2,0 and it continues on and on
    return reverse(arr, ++startIndex, --endIndex)
}
//console.log(reverse([1,2,3], 0, 2));
