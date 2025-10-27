function longest_subarray_with_sum_k(arr, k) {

    let hash = new Map<number, number>()
    let sum = 0
    let length = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
        if(!hash.has(sum)) hash.set(sum, i)
        if(sum===k) {
            //console.log(i);
            length = Math.max(length, i+1)
        }
        if (hash.has(sum-k)) {
            length = Math.max(length, i - hash.get(sum-k)! )
            //console.log(sum, i,length);
        }
    }
    return [length]
}
//console.log(longest_subarray_with_sum_k([2,3,5,1,9], 10));//3
//console.log(longest_subarray_with_sum_k([2,3,5], 5));//2
//console.log(longest_subarray_with_sum_k([2,3,4,1,9], 10));//3
//console.log(longest_subarray_with_sum_k([1,2,3,1,1,1,1,4,2,3], 3));
//console.log(longest_subarray_with_sum_k([2,0,0,3], 3));//3
//console.log(longest_subarray_with_sum_k([2], 2));
console.log(longest_subarray_with_sum_k([1,2,2 ,-1,1,1,1,4,2,3], 4));
//when i is at 6, sum is 7, 7-k(4) is 3, its value(index) is 1 in hash, 6-1 is 5 which is [2,-1,1,1,1] which sums to 4 which is the largest subarray
// 5 2 2
// 3
// 5 4 4
// 7 6 5
// 11 7 5
// [
//   5,
//   Map(9) {
//     1 => 0,
//     3 => 1,
//     5 => 2,
//     4 => 3,
//     6 => 5,
//     7 => 6,
//     11 => 7,
//     13 => 8,
//     16 => 9
//   }
// ]