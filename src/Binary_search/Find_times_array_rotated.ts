function Find_times_array_rotated(array) {
    let n = array.length
    let low = 0
    let high = n-1
    let min = Infinity
    let ans = -1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[low] <= array[high]) {
            if(array[low] < min){
                min = array[low]
                ans = low
                break
            }
        }
        if(array[low] <= array[mid]){
            if(array[low] < min){
                min = array[low]
                ans = low
            }
            low = mid+1
        } else {
            min = Math.min(min, array[mid])
            if(array[mid] < min){
                min = array[mid]
                ans = mid
            }
            high = mid-1
        }
    }
    return ans
}
console.log(Find_times_array_rotated( [4,5,6,7,0,1,2,3]));
