function missing_number(arr, N) {  
    const hash =  new Map<number, boolean>()
    for (const ele of arr) {
        hash.set(ele, true)
    }
    for (let i = 1; i < N; i++) {
        if (!hash.has(i)) {
            return i
        }
    }
}
console.log(missing_number([1,2,4,5], 5 ));

  