function missing_number(arr, N) {  
    const hash =  new Map<number, number>()
    for (let i = 0; i <= N+1; i++) {
        if(arr[i] === i) hash.set(i, 1)
        else {
            hash.set(i, 0)
        }
    }
    for (const [j, val] of hash) {
        if (val === 0 && j !==0) {
            return j
        }
    } 
}
console.log(missing_number([1,2,4,5], 5 ));

  