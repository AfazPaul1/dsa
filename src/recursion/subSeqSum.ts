function subSeqSum(arr:number[], seq:number[], n:number, i:number, sum:number) {
    if (i >= n) {
        console.log(seq, sum);
        return
    }
    seq.push(arr[i])
    sum+=arr[i]
    subSeqSum(arr, seq, n, i+1, sum)
    seq.pop()
    sum-=arr[i]
    subSeqSum(arr, seq, n, i+1, sum)

}
console.log(subSeqSum([1, 2, 1], [], 3, 0, 0));
