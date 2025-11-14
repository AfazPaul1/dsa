function merge_two_sorted_arrays(arr1, arr2) {
    let i = 0
    let j = 0
    let arr3= []
    let n = arr1.length
    let m = arr2.length
    while( i < n && j < m){
        if(arr1[i] > arr2[j]) {
            arr3.push(arr2[j])
            j++
        } else if(arr1[i] < arr2[j]) {
            arr3.push(arr1[i])
            i++
        }
    }
    while(i < n) {
        arr3.push(arr1[i])
        i++
    }
    while(j < m) {
        arr3.push(arr2[j])
        j++
    }
    for (let k = 0; k < arr3.length; k++) {
        if(k >= n)  {
            arr2[k-n] = arr3[k] //k-n instead of using another variable like start j from 0 and increment separately
        } else {
            arr1[k] = arr3[k]
        }
    }
    return [arr1, arr2]
}
console.log(merge_two_sorted_arrays([1,3,5,7], [0,2,6,8,9]));
