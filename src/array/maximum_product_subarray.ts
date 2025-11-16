function maximum_product_subarray(array) {
    let max  = 0
    for (let i = 0; i < array.length; i++) {
        let product = 1
        for (let j = i; j < array.length ; j++) {
            product*=array[j]
            max = Math.max(product, max)
        }
    }
    return max
}
console.log(maximum_product_subarray([1,2,3,4,5,0]));//120
