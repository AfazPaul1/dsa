function two_sum(arr, target) {
    const hash =  new Map<number, number>()
    for (let i = 0; i < arr.length; i++) {
        let comp = target-arr[i]
        if(hash.has(comp)) return [i, hash.get(comp)]
        hash.set(arr[i], i)
    }
    return -1
    

}
console.log(two_sum([2,6,5,8,11], 14));
