//print only the first sum match
let flag = false
function subSeqSum(arr:number[], seq:number[], n:number, i:number, sum:number, gnSum) {
    if (i >= n ) {
        if(sum === gnSum && flag === false) {
            flag = true
            console.log(seq, sum);
        }
        return 
    }
    seq.push(arr[i])
    sum+=arr[i]
    subSeqSum(arr, seq, n, i+1, sum, gnSum)
    seq.pop()
    sum-=arr[i]
    subSeqSum(arr, seq, n, i+1, sum, gnSum)

}
console.log(subSeqSum([1, 2, 1], [], 3, 0, 0, 3));
