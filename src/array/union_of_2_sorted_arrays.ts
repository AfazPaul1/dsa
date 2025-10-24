function union_of_2_sorted_arrays(arr1, arr2) {
    let i = 0
    let j = 0
    let n = arr1.length
    let m = arr2.length
    let union: number[] = []
    
    while(i < n && j < m) {
        if(arr1[i] < arr2[j]) {
            if(union.length === 0 || union[union.length-1]!==arr1[i]) {
                union.push(arr1[i])
            }
            i++
        } else {
            if(union.length === 0 || union[union.length-1]!==arr2[j]) {
                union.push(arr2[j])
            }
            j++
        }
    }
    while(i<n) {
        if(union.length === 0 || union[union.length-1]!==arr1[i]) {
            union.push(arr1[i])
        }
        i++
    }
    while(j<m) {
        if(union.length === 0 || union[union.length-1]!==arr2[j]) {
            union.push(arr2[j])
        }
        j++
    }
    return union
}
console.log(union_of_2_sorted_arrays([1,2,3,4,6,6,6,7,8,9], [2,3,4,4,5,24]));
 //[1, 2, 3, 4, 5, 6, 7, 8, 9, 24]  