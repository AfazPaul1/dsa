function count_subarrays_xor_K(array, k) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        let xor = 0 //0 is the identity value for xor operations
        for (let j = i; j < array.length; j++) {
            xor^=array[j]
            if(xor === k) count++
        }
    }   
    return count
}
console.log(count_subarrays_xor_K( [4, 2, 2, 6, 4], 6));//4
