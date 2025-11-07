function longest_consecutive_sequence(array:number[]) {
    let longest = 1
    let last_min = -1
    let count = 0
    let hash = new Set(array)
    for (const ele of hash) {
        if(!hash.has(ele-1)) {
            let count = 1 //we know that ele exists so 
            let curEle = ele
            while(hash.has(curEle+1)){
                count++
                curEle++
            }
            longest = Math.max(longest, count)
        }
    }
    return longest
}
console.log(longest_consecutive_sequence([102,4,100,1,101,3,2,1,1]));
