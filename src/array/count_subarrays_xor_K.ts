function count_subarrays_xor_K(array, k) {
    let count = 0
    const hash = new Map<number, number>()
    hash.set(0,1)
    let xor = 0 
    for (let i = 0; i < array.length; i++) {
        xor^=array[i]
        hash.set(xor, (hash.get(xor) || 0) + 1)
        let intr = xor^k
        if (hash.has(intr)) count+=hash.get(intr)!
        
    }   
    return count
}
console.log(count_subarrays_xor_K( [4, 2, 2, 6, 4], 6));//4
