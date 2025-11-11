function majority_n_by_3(array: number[]) {
    const n_by_3 = Math.floor(array.length/3)
    let ele1 = 0
    let count1 = 0
    let ele2 = 0
    let count2 = 0
    let res = []
    for (let i = 0; i < array.length; i++) {
        if(count1 === 0 && ele2 !== array[i]) {
            count1 = 1
            ele1 = array[i]
        }
        else if(count2 === 0 && ele1 !== array[i]) {
            count2 = 1
            ele2 = array[i]
        }
        else if(array[i] == ele1) count1++
        else if(array[i] === ele2) count2++
        else {
            count1--
            count2--
        }
    }
    count1 = 0
    count2 = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] === ele1) count1++
        else if(array[i] === ele2) count2++
    }
    if(count1 > n_by_3) res.push(ele1)
    if(count2 > n_by_3) res.push(ele2)
    res.sort((a,b) => a-b)
    return res
}
console.log(majority_n_by_3([1,2,2,3,2]));
console.log(majority_n_by_3([11,33,33,11,33,11]));
