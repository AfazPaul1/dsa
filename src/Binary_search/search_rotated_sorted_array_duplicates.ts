function search_rotated_sorted_array_duplicates(array, k) {
    let n = array.length
    let low = 0
    let high = n -1
    while(low <= high) {
        let mid  = Math.floor((low+high)/2)
        if(array[mid] === array[low] && array[mid] === array[high]) {
            high--
            low++
            continue
        }
        if(array[mid] === k) return true
        else if(array[low] <= array[mid]) {
            if(k >= array[low] && k< array[mid]) {
                high = mid-1
            } else {
                low = mid+1
            }
        } 
        else {
            if(k > array[mid] && k <= array[high]) {
                low = mid+1
            } else {
                high = mid-1
            }
        }
    }
    return false
}
console.log(search_rotated_sorted_array_duplicates(  [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 3));
console.log(search_rotated_sorted_array_duplicates( [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 10));

