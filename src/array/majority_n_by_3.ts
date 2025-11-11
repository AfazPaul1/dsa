function majority_n_by_3(array: number[]) {
    const n_by_3 = Math.floor(array.length/3)
    const res= new Set()
    const hash =  new Map<number, number>()
    for (let i = 0; i < array.length; i++) {
        let updated  = (hash.get(array[i]) || 0) + 1
        hash.set(array[i], updated)
        if(updated > n_by_3) {
            res.add(array[i])
        }
    }
    console.log(hash);
    
    return res

    
}
console.log(majority_n_by_3([1,2,2,3,2]));
