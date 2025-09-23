function reverse(arr:number[], i, n) {
    if(i > n/2) return arr
    arr = swap(arr, i, n-1)
    return reverse(arr, i++, n-i-1)
}
console.log(reverse([1,2,3,4,5], 0, 5));
function swap(arr, i, x) {
    [arr[i], arr[x]] = [arr[x], arr[i]]
    return arr
}
//λ npx tsx reverse.ts
//[ 3, 2, 5, 4, 1 ]