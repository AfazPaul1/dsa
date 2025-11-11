function majority_n_by_3(array: number[]) {
    const n_by_3 = Math.floor(array.length/3)
    const res = new Set()
    for (let i = 0; i < array.length; i++) {
        let count = 0
        for (let j = 0; j < array.length; j++) {
            if(array[i] === array[j]) {
                count++
            }
        }
        if(count > n_by_3) res.add(array[i])
    }
return res
}
console.log(majority_n_by_3([1,2,2,3,2]));
