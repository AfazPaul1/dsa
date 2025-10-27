function longest_subarray_with_sum_k(arr, k) {

    let hash = new Map<number, number>()
    let sum = 0
    let length = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
        hash.set(sum, i)
        if(sum===k) {
            
            length = Math.max(length, i+1)
        }
        if (hash.has(sum-k)) {
            length = Math.max(length, i- hash.get(sum-k)! )//SINCE I HAVE ALREADY checked that it exists using has i am using rhe non null assertion
        }
    }
    
    return length
}
//console.log(longest_subarray_with_sum_k([2,3,5,1,9], 10));//3
console.log(longest_subarray_with_sum_k([2,3,5], 5));//2
console.log(longest_subarray_with_sum_k([2,3,4,1,9], 10));//3
console.log(longest_subarray_with_sum_k([1,2,3,1,1,1,1,4,2,3], 3));
