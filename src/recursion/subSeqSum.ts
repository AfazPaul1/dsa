//print only the first sum match

function subSeqSum(arr:number[], seq:number[], n:number, i:number, sum:number, gnSum:number) {
    if (i >= n ) {
        if(sum === gnSum) {
            console.log(seq, sum);
            return true
        } else {
            return false
        } 
    }
    seq.push(arr[i])
    sum+=arr[i]
    if (subSeqSum(arr, seq, n, i+1, sum, gnSum) === true) {
        return
    }
    seq.pop()
    sum-=arr[i]
    if (subSeqSum(arr, seq, n, i+1, sum, gnSum) === true) {
        return
    }

}
console.log(subSeqSum([1, 2, 1], [], 3, 0, 0, 3));
