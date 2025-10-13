function mergeArr(arr1, arr2) {
    const res = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        let eleToAdd = 0
        if (arr1[i] <= arr2[j]) {
            eleToAdd = arr1[i]
            i++
        } else{
            eleToAdd = arr2[j]
            j++
        }
        if (res.length === 0 || eleToAdd !== res[res.length -1 ]  ) {
            res.push(eleToAdd)
        }
    }
    while(i < arr1.length) {
        if (arr1[i] !== res[res.length -1 ]) {
            res.push(arr1[i])    
        }
        i++
    }
    while(j < arr2.length) {
        if (arr2[j] !== res[res.length-1]) {
            res.push(arr2[j])    
        }
        j++
    }
    
    console.log(res);
    
}
console.log(mergeArr([1,2,3,4,10], [1, 9,10,11]));
