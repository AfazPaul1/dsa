function find_first_and_last_occurence(array, target) {
    let first  = -1
    let last = -1
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            if(first === -1) first  = i
            last = i
        }
        
    }
    return [first, last]
}
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40], 13));
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40], 40));
