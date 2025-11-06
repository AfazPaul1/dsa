function longest_consecutive_sequence(array:number[]) {
    let longest = 1
    let last_min = -1
    let count = 0
    array.sort((a, b) => a-b)
    for (let i = 0; i < array.length; i++) {
        if (array[i] === last_min) {
            continue
        }
        else if(array[i] - 1 === last_min){
            count++
            longest = Math.max(longest, count)
        } else {
            count = 1
        }
        last_min = array[i]
        
        
    }
    return longest
}
console.log(longest_consecutive_sequence([102,4,100,1,101,3,2,1,1]));
