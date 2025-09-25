function subSeqSum(arr:number[], seq:number[], n:number, i:number, sum:number, gnSum, count):number {
    if (i >= n) {
        if(sum === gnSum) {
            return 1 
        }
        return 0
    }
    sum+=arr[i]
    let l = subSeqSum(arr, seq, n, i+1, sum, gnSum, count)
    sum-=arr[i]
    let r = subSeqSum(arr, seq, n, i+1, sum, gnSum, count)
    return l + r
}
console.log(subSeqSum([1, 2, 1], [], 3, 0, 0, 1, 0));