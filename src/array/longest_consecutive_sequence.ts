function longest_consecutive_sequence(array:number[]) {
    let longest = 1
    for (let i = 0; i < array.length; i++) {
        let x = array[i]
        let count = 1
        while(array.some(ele => ele === x+1)) {
            count++
            x = x+1
        }
        longest = Math.max(longest, count)
    }
    return longest
}
console.log(longest_consecutive_sequence([102,4,100,1,101,3,2,1,1]));
