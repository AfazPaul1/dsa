function missing_and_repeating_number(array, k) {
    let missing = -1
    let repeating = -1
    for (let i = 1; i < k; i++) {
        let count = 0
        for (let j = 0; j < array.length; j++) {
            if(array[j] === i) count++
        }
        if(count === 0) missing = i
        else if(count === 2)  repeating = i
    }
    return [missing, repeating]
}
console.log(missing_and_repeating_number([3,1,2,5,3], 5));
