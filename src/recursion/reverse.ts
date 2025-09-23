function reverse(arr:number[], i, n) {
    //console.log(i, i>n/2, n/2);
    
    if(i >= n-1) return arr
    arr = swap(arr, i, n-1)
    return reverse(arr, i+1, n-1)
}
//console.log(reverse([1,2,3,4,5], 0, 5));
//[ 5, 4, 3, 2, 1 ] 
//this works for now
//lets check for bigger array
console.log(reverse([1,2,3,4,5, 6, 7, 8, 9, 10, 11], 0, 11));
//[12, 11, 9, 6,  5, 4,  7, 8, 3, 10, 2,  1]
//works
console.log(reverse([1,2,3,4,5, 6, 7, 8, 9, 10, 11, 12], 0, 12));
//even case works too
function swap(arr, i, x) {
    console.log(i, x);
    
    [arr[i], arr[x]] = [arr[x], arr[i]]
    //console.log(arr);
    
    return arr
}
//λ npx tsx reverse.ts
//[ 3, 2, 5, 4, 1 ]
