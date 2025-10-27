function longest_subarray_with_sum_k(arr, k) {

    let hash = new Map<number, number>()
    let sum = 0
    let length = 0
    let total = arr.reduce((acc, cur) => cur+acc)
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
        hash.set(sum, i)
        if (hash.has(total-k)) {
            length = Math.max(length, arr.length-(i+1))
        }
    }
    
    return length
}
//console.log(longest_subarray_with_sum_k([2,3,5,1,9], 10));//3
console.log(longest_subarray_with_sum_k([2,3,5], 5));//2
console.log(longest_subarray_with_sum_k([2,3,4,1,9], 10));//3
