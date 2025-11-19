function single_element_sorted_array(array) {
    let n = array.length
    let low = 1
    let high = n-2
    if(n === 1) return array[0]
    if(array[0] !== array[1]) return array[0]
    if(array[n-1] !== array[n-2]) return array[n-1]
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] !== array[mid-1] && array[mid] !== array[mid+1]){
            return array[mid]
        }
        if(mid%2 === 1 && array[mid] === array[mid-1] || mid%2 === 0 && array[mid] === array[mid+1]) {
            low = mid+1
        } 
        else  {
            high = mid-1
        }
    }
    return -1
}
console.log(single_element_sorted_array([1,1,2,2,3,3,4,5,5,6,6]));
console.log(single_element_sorted_array([1,1,3,5,5]));
//edge cases
console.log(single_element_sorted_array([1,1,3,3,5,5,6]));
console.log(single_element_sorted_array([1,3,3,5,5]));
console.log(single_element_sorted_array([1]));
