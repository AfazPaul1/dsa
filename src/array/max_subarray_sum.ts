function max_subarray_sum(array) {
    let max= 0
    let sum = 0
     for (let i = 0; i < array.length; i++) {
        sum += array[i]
        max = Math.max(sum, max)
        if(sum < 0) sum = 0
     }
    return max
}
console.log(max_subarray_sum([-2,-2,4,-1,-2,1,5,-3]));
