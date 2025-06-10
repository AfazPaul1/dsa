function countPairs( x: number, arr1: number[], arr2: number[]) {
    const hash = new Map()
    for (const ele of arr1) {
        hash.set(ele, true)
    }
    let count = 0 
    for (const ele of arr2) {
        console.log(hash.has(x-ele));    
        if(hash.has(x-ele)) count++
    }
    return count

}
console.log(countPairs(10, [1, 3, 5, 7], [2, 3, 5, 8]));
