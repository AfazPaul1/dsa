function max_subarray_sum(array) {
    let max= 0
    for (let i = 0; i < array.length; i++) {
        let sum = 0
        for (let j = i; j < array.length; j++) {
            sum+=array[j]
            max = Math.max(sum, max)
        }  
    }
    return max
}
console.log(max_subarray_sum([-2,-2,4,-1,-2,1,5,-3]));
