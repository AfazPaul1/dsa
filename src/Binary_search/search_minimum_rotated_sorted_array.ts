function search_minimum_rotated_sorted_array(array) {
    let n = array.length
    let low = 0
    let high = n-1
    let ans = Infinity 
    while(low <= high) {
        let mid = Math.floor((low+high) /2 )
        if(array[low] === array[mid] && array[mid] === array[high]) {
            ans = Math.min(array[low], ans) //need to do this or we might skip 1
            low++
            high--
            continue
        }
        if(array[low] <= array[high]) {
            ans = Math.min(array[low], ans)
            break
        }
        if(array[low] <= array[mid]) {
            ans = Math.min(array[low], ans)
            low = mid+1
        } else {
            ans = Math.min(array[mid], ans)
            high=mid-1
        }
    }
    return ans  
}
//console.log(search_minimum_rotated_sorted_array([4,5,6,7,0,1,2,3]));//0
//console.log(search_minimum_rotated_sorted_array([7, 8, 1, 2, 3, 3, 3, 4, 5, 6]));//1 this still retuns correctly without any code to handle duplictaes? ah probably because they occur a=on the right sorted part and are eliminates so never looked at. oh i missed a point here cause duplicates only become an issue when low  = mid  = high
console.log(search_minimum_rotated_sorted_array([2, 2, 2, 2, 3, 1, 2]));//we get 2 when it should have been 1
//1 is set when low = mid = high = 5