function longest_subarray_with_sum_k(arr, k) {

    let longest_length = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = 0
        for (let j = i; j < arr.length; j++) {
            sum+=arr[j]
            if(sum===k) {
                longest_length=Math.max((j+1)-i, longest_length)
            }  
        }
    }
    return longest_length
}
console.log(longest_subarray_with_sum_k([2,3,5,1,9], 10));//3
console.log(longest_subarray_with_sum_k([2,3,5], 5));//2
