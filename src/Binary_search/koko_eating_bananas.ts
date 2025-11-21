function koko_eating_bananas(arr, h) {
    //totalhours
    let k = Infinity
    //bananas per hour
    let hoursCandidate = 1
    while(k > h) {
        k = 0
        for (const element of arr) {
            k+=Math.ceil((element/hoursCandidate))
        }
        hoursCandidate++
    }
    return hoursCandidate-1
}
console.log(koko_eating_bananas([3,6,7,11], 8));
