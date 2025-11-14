function missing_and_repeating_number(array ) {
    let k = array.length
    let missing = -1
    let repeating = -1
    let hash = new Map()
    for (const element of array) {
        hash.set(element, (hash.get(element) | 0) + 1)
    }
    for (let i = 1; i <= k; i++) {
        if(!hash.has(i)) missing = i
        else if(hash.get(i) === 2) repeating = i
        else if(missing !== -1 && repeating !== -1) break //meaning we have found them both so no need to check more hence break
    }
    console.log(hash);
    return [missing, repeating]
}
console.log(missing_and_repeating_number([3,1,2,5,3]));
