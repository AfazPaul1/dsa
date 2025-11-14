function missing_and_repeating_number(array, k) {
    let missing = -1
    let repeating = -1
    let hash = new Map()
    //ok so how do i do this like if i loop through array and build hash i can only find the repeated and not the missing cause it wont have an entry
    //so some way i can loop through the k and hash
    //like i need atleast a 2n solution
    //maybe i should first try with 3n solution
    for (let i = 1; i <= k; i++) {
        hash.set(i, 0)
    }
    for (const element of array) {
        hash.set(element, (hash.get(element) | 0) + 1)
    }
    console.log(hash);
    for (const [element, value] of hash) {
        if(value === 2) repeating = element
        else if(value === 0) missing = element
    }
    return [missing, repeating]
}
console.log(missing_and_repeating_number([3,1,2,5,3], 5));
