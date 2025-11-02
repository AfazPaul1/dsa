function max_subarray_sum(array) {
    let max= 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            //console.log(array.slice(i, j+1), array.slice(i, j+1).reduce((acc, cur) => acc+cur));
            max = Math.max(array.slice(i, j+1).reduce((acc, cur) => acc+cur), max)
        }  
    }
    return max
}
console.log(max_subarray_sum([-2,-2,4,-1,-2,1,5,-3]));
