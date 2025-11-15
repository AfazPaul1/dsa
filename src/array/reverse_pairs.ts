function reverse_pairs(array: number[]) {
    let res = []
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i] > 2*array[j]){
                res.push([array[i], array[j]])
                count++
            }
        }
    }
    return count
}
console.log(reverse_pairs([1,3,2,3,1]));//2
console.log(reverse_pairs([3,2,1,4]));//1
