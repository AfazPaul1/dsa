function mergeArr(arr1, arr2) {
    const hash = new Set()
    let i = 0
    let j = 0
    while(j < 6) {
        if (arr1[i] <= arr2[j]) {
            hash.add(arr1[i])
            i++
        } else{
            hash.add(arr2[j])
            j++
        }
    }
    
    console.log(hash);
    
}
console.log(mergeArr([1,2,3,4,10], [1, 9,10,11]));
