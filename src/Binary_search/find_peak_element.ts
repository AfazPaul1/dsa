function find_peak_element(array) {
    let n = array.length
    for (let i = 0; i < array.length; i++) {
        if((i === 0 || array[i-1] < array[i]) && (i === n-1 || array[i+1] < array[i])) //i wasnt bracketing properly initially hence it broke like it did (a || b && c || d ) when it should have been ((a || b) && (c || d) )
        {
            return i
        }
    }
    return -1
}
console.log(find_peak_element([1,2,3,4,5,6,7,8,5,1]));//7
console.log(find_peak_element([1,2,1,3,5,6,4]));//1
