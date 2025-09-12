function sumExists1(arr: number[], n:number, sum: number) {
    const hash = new Set()
    for (const ele of arr) {
        if (hash.has(sum - ele)) {
            return 1
        } else {
            hash.add(ele)
        }
    }
    return 0
}
console.log(sumExists1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 14));
console.log( sumExists1([4, 3, 5, 6], 4, 12) );
