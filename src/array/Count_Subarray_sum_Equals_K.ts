function Count_Subarray_sum_Equals_K(array: number[], k:number) {
    let left = 0
    let right = 0
    let sum = array[0]
    let count = 0
    while(right < array.length) {
        while(sum > k) {
            sum-=array[left]
            left++
        }
        if(sum === k) {
            count++
        }
        right++
        if(right < array.length) sum+=array[right]     
    }
    return count
}
//console.log(Count_Subarray_sum_Equals_K([3, 1, 2, 4], 6));
console.log(Count_Subarray_sum_Equals_K([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));
