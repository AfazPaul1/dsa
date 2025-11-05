function next_permutation(array:number[]) {
    let n = array.length
    let idx = -1
    for (let i = n-2; i >= 0; i--) {
        if (array[i] < array[i+1]) {
            idx = i
            break
        }  
    }
    if(idx === -1) return array.reverse()
    for (let j = n-1; j >= idx; j--) {
        if (array[j] > array[idx]) {
            [array[idx], array[j]] = [array[j], array[idx]]
            break
        }  
    }
    let i = idx+1
    let j = n-1
    while(i < j) {
        [array[i], array[j]] = [array[j], array[i]]
        i++
        j--
    }
    return array
}
//console.log(next_permutation([1,2,3]));//[ 1, 3, 2 ]
console.log(next_permutation([2,1,5,4,3,0,0]));
