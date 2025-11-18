function search_rotated_sorted_array(array, k) {
    let n = array.length
    let low = 0
    let high = n -1
    while(low <= high) {
        let mid  = Math.floor((low+high)/2)
        if(array[mid] === k) return mid
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
    return -1
}
console.log(search_rotated_sorted_array( [4,5,6,7,0,1,2,3], 0));
console.log(search_rotated_sorted_array( [7,8,9,1,2,3,4,5,6], 1));

