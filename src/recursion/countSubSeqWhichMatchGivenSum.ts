function subSeqSum(arr:number[], seq:number[], n:number, i:number, sum:number, gnSum, count) {
    if (i >= n) {
        if(sum === gnSum) {
            count++
            console.log(seq, sum, count);
        }
        return
    }
    seq.push(arr[i])
    sum+=arr[i]
    subSeqSum(arr, seq, n, i+1, sum, gnSum, count)
    seq.pop()
    sum-=arr[i]
    subSeqSum(arr, seq, n, i+1, sum, gnSum, count)
}
console.log(subSeqSum([1, 2, 1], [], 3, 0, 0, 3, 0));