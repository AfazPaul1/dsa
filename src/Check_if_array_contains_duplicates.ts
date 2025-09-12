function checkDuplicates(arr: number[]) {
    const hash = new Set()
    for (const ele of arr) {
        if (hash.has(ele)) {
            return true
        } else {
            hash.add(ele)
        }
    }
    return false
}

console.log( checkDuplicates([4, 5, 6, 4]) );
console.log( checkDuplicates([1, 2, 3, 4]) );


