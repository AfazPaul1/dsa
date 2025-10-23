function union_of_2_sorted_arrays(arr1, arr2, n, m) {
    let i = 0
    let j = 0
    let res:number[] = []
    let max_of_nm = Math.max(n,m)
    while(i<max_of_nm && j <max_of_nm) {
        if (arr1[i] < arr2[j]) {
            if(arr1[i] !== res[res.length-1]) {
                res.push(arr1[i])
            }
            i++
        } else {
            if(arr2[j] !== res[res.length-1]) {
                res.push(arr2[j])
            }
            j++
        }
    }
    
    return res
}
console.log(union_of_2_sorted_arrays([1,2,3,4,5,6,6,6,7,8,9], [2,3,4,4,5], 5, 5));
