function maximum_product_subarray(array) {
    let n = array.length
    let max  = 0
    let prefix = 1
    let suffix = 1
    for (let i = 0; i < n; i++) {    
        if(suffix === 0) suffix = 1
        if(prefix === 0) prefix = 1
        prefix*=array[i]
        suffix*=array[n-i-1]
        max = Math.max(max, Math.max(prefix, suffix))
    }
    return max
}
//console.log(maximum_product_subarray([1,2,3,4,5,0]));//120
//console.log(maximum_product_subarray([1,2,-3,0,-4,-5]));//20
//console.log(maximum_product_subarray([2,3,-2,4]));//6
//console.log(maximum_product_subarray([-2,3,4,-1,0,-2,3,1,4,0,4,6,-1,4]));//24
console.log(maximum_product_subarray([3,4,-1,-2,3,1,4,4,6,-1,4]));