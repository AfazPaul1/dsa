function merge_two_sorted_arrays(arr1, arr2) {
    let n = arr1.length
    let m = arr2.length
    let len = n+m
    let gap = Math.ceil((len)/2)
    function swapIfGreater(array1:number[], array2:number[], left:number, right:number ) {
        if(arr1[left] > arr2[right]) {
            [arr1[left],  arr2[right]] = [arr2[right], arr1[left]]            
        }
    }
    
    while(gap > 0) {
        let i = 0
        let j = i + gap
        while(j < len) {
            if(j >= n && i < n) {
                swapIfGreater(arr1,arr2, i, j-n)
            } else if(i>= n) {
                swapIfGreater(arr2,arr2, i-n, j-n)
            }
            else {
                swapIfGreater(arr1,arr1, i, j)
            }
            i++
            j++
        }
        if(gap === 1) break
        gap = Math.ceil(gap/2)
        
    }
    return [arr1, arr2]
}
console.log(merge_two_sorted_arrays([1,3,5,7], [0,2,6,8,9]));
console.log(merge_two_sorted_arrays([10,20], [1]));
