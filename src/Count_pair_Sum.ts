function countPairs( x: number, arr1: number[], arr2: number[]) {
    const hash = new Map()
    for (const ele of arr1) {
        hash.set(ele, (hash.get(ele) || 0) + 1)
    }
    let count = 0 
    for (const ele of arr2) {
        console.log(hash.get(x-ele));    
        if(hash.get(x-ele)) count++
    }
    return count

}
console.log(countPairs(10, [1, 3, 5, 7], [2, 3, 5, 8]));
