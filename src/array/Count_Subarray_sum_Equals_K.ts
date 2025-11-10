function Count_Subarray_sum_Equals_K(array: number[], k:number) {
    let count = 0
    let sum = 0
    const hash =  new Map<number, number[]>()
    hash.set(0,[-1])
    for (let i = 0; i < array.length; i++) {
        sum+=array[i]
        let arr = hash.get(sum) || []
        hash.set(sum, [...arr, i] )
        if(hash.has(sum-k)){
            for (const element of hash.get(sum-k)!) {
                console.log(array.slice(element+1, i+1));
            }
            count+=hash.get(sum-k)!.length
        }
    }
    //console.log(hash);
    
    return count
}
console.log(Count_Subarray_sum_Equals_K([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3)); 