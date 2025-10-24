function union_of_2_sorted_arrays(arr1, arr2, n, m) {
    const res = new Set<number>() 
    for (let i = 0; i < arr1.length; i++) {
        res.add(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++) {
        res.add(arr2[j])   
    }
    let union = []
    for (const ele of res) {
        union.push(ele)
    }
    return union.sort((a,b) => a-b)
}
console.log(union_of_2_sorted_arrays([1,2,3,4,6,6,6,7,8,9], [2,3,4,4,5,24], 5, 5));
 //Set(10) { 1, 2, 3, 4, 6, 7, 8, 9, 5, 24 }    