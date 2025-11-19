function search_minimum_rotated_sorted_array(array) {
    let n = array.length
    let low = 0
    let high = n-1
    let ans = Infinity // one three special numeric constants its type will be number 
    //earlier i used -1 but then i cant set minimum cause -1 will always be lesser 
    //ans === -1 ? ans = array[low] : ans = Math.min(array[low], ans) so i used something like this which doesnt workfor negatives?
    while(low <= high) {
        let mid = Math.floor((low+high) /2 )
        if(array[low] <= array[high]) {
            ans = Math.min(array[low], ans)
            break
            //this happens in the eg: 1 array
            //return array[low] //still have to compare
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
console.log(search_minimum_rotated_sorted_array([4,5,6,7,0,1,2,3]));
