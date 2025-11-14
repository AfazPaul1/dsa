function merge_two_sorted_arrays(arr1, arr2) {
    let n = arr1.length
    let m = arr2.length
    let len = n+m
    let gap = Math.ceil((len)/2)
    
    
    while(gap > 0) {
        let i = 0
        let j = i + gap
        while(j < len) {
            if(j >= n) {
                if(arr1[i] > arr2[j-n]) {
                    [arr1[i],  arr2[j-n]] = [arr2[j-n], arr1[i]]
                    
                }
                i++
                    j++
            } else {
                if(arr1[i] > arr1[j]) {
                    [arr1[i],  arr1[j]] = [arr1[j], arr1[i]]
                    
                }
                i++
                    j++
            }
        }
        if(gap === 1) return [arr1, arr2]
        gap = Math.ceil(gap/2)
        
    }
    return [arr1, arr2]
}
console.log(merge_two_sorted_arrays([1,3,5,7], [0,2,6,8,9]));
console.log(merge_two_sorted_arrays([10,20], [1]));
