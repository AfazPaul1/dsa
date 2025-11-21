function koko_eating_bananas(arr, h) {
    arr.sort((a,b) => a-b)
    let low = 1
    let high = Math.max(...arr)
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        let sum = 0
        for (const element of arr) {
            sum += Math.ceil(element/mid)
        }
        if(sum <= h) high = mid-1 //all possible values so we handle the equal case here
        else if(sum > h) low = mid+1
    }
    return low
}
//console.log(koko_eating_bananas([3,6,7,11], 8));//4
console.log(koko_eating_bananas([25, 12, 8, 14, 19], 5));//25
