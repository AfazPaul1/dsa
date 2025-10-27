function longest_subarray_with_sum_k(arr, k) {
    let left = 0
    let right = 0
    let sum = arr[0]
    let n = arr.length
    let maxLen = 0
    while( right < n-1 ) {
        right++;
        sum+=arr[right]
        while(sum>k) {
            sum-=arr[left]
            left++
        }
        if(sum===k) {
            maxLen=Math.max(maxLen, (right+1)-left)
        }
    }

    return  maxLen
}
//console.log(longest_subarray_with_sum_k([2,3,5,1,9], 10));//3
//console.log(longest_subarray_with_sum_k([2,3,5], 5));//2
//console.log(longest_subarray_with_sum_k([2,3,4,1,9], 10));//3
//console.log(longest_subarray_with_sum_k([1,2,3,1,1,1,1,4,2,3], 3));
//console.log(longest_subarray_with_sum_k([2,0,0,3], 3));//3
//console.log(longest_subarray_with_sum_k([2], 2));
//console.log(longest_subarray_with_sum_k([1,2,2,-1,1,1,1,4,2,3], 4));
//console.log(longest_subarray_with_sum_k([1,2,3,1,1,1,1,3,3], 6));//4
console.log(longest_subarray_with_sum_k([1,2,3,1,1,1,1,3,19], 19));//1 changed while condition to n-1 to make sure loop doesnt run for right = 9
console.log(longest_subarray_with_sum_k([19,2,3,1,1,1,1,3,1], 19));//0 incorrect //this is due to use never checking for 1st element we immediately sum it with next as it eneters the loop
