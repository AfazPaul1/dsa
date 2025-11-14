function merge_two_sorted_arrays(arr1, arr2) {
    let n = arr1.length
    let m = arr2.length
    let i = n-1
    let j = 0
    
    while(arr1[i] > arr2[j]) {
        [arr1[i], arr2[j]] = [arr2[j], arr1[i]]
        i--
        j++
    }
    arr1.sort((a,b) => a-b)
    arr2.sort((a,b) => a-b)
    return [arr1, arr2]
}
console.log(merge_two_sorted_arrays([1,3,5,7], [0,2,6,8,9]));
console.log(merge_two_sorted_arrays([10,20], [1]));
