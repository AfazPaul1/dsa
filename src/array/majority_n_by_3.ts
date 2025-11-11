function majority_n_by_3(array: number[]) {
    const n_by_3 = Math.floor(array.length/3)
    const res = new Set()
    for (let i = 0; i < array.length; i++) {
        if(res.has(array[i])) continue
        let count = 0
        for (let j = 0; j < array.length; j++) {
            if(array[i] === array[j]) {
                count++
            }
        }
        if(count > n_by_3) res.add(array[i])
        if(res.size === 2) return res
    }
return res
}
console.log(majority_n_by_3([1,2,2,3,2]));
