function majority_element(arr:number[]) {
    let half = Math.floor(arr.length/2)
    let hash =  new Map<number, number>()
    for (const ele of arr) {
        hash.set(ele, (hash.get(ele) || 0) + 1)
        //console.log(hash);
        if(hash.get(ele)! > half) return ele
    }
    return hash 
}
console.log(majority_element([2,2,3,3,1,2,2,3,3,3,3,3,3]));
