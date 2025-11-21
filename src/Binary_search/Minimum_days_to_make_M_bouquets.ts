function Minimum_days_to_make_M_bouquets(array, N, m, k) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    if(array.length < (m*k)) return -1
    for (let i = min; i <= max; i++) {
        if(possibleSet(array, N, m, k, i) === m) return i
    }
    return -1
}
console.log(Minimum_days_to_make_M_bouquets(
    [7, 7, 7, 7, 13, 11, 12, 7], 8, 2, 3));
    console.log(Minimum_days_to_make_M_bouquets(
    [1, 10, 3, 10, 2], 5, 3, 2));
function possibleSet(array, N, m, k, i) {
    let count = 0
    let noOfBouquet = 0
    for (const element of array) {
        if(element <= i) count++
        else {
            noOfBouquet += Math.floor(count/k)
            count = 0
        }
    }
    noOfBouquet += Math.floor(count/k) //we need to do this again cause for the last element if block is run then we would have never set no of bouquets for that 
    return noOfBouquet
}