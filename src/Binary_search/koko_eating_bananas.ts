function koko_eating_bananas(arr, h) {
    // why max of array? because it can only 1 bucket in one hour cause we take ceil value and there are 4 buckets the minimum hours taken cannot be low than 4. the maximum bananas in a basket is 11 so max possible banans it can eat per hour is 11. even if it eats 12 or 20 0r 100 banans per hour it will still take 4 hours. so that is our max possible banans per hour value
    let k = Math.max(...arr)
    for (let i = 1; i <= k; i++) { //iterator is the candidate
        let sum = 0
        for (const element of arr) {
            sum += Math.ceil(element/i)
        }
        if(sum <= h) return i
    }
    return -1
}
console.log(koko_eating_bananas([3,6,7,11], 8));
