function find_peak_element(array) {
    let n = array.length
    let low = 1
    let high = n-2
    if(n === 1) return 0
    if(array[0] > array[1]) return 0
    if(array[n-1] > array[n-2]) return n-1
    while(low <= high) {
        let mid = Math.floor((low+high) /2)
        if(array[mid] > array[mid-1] && array[mid] > array[mid+1]) return mid
        else if(array[mid] > array[mid-1]) low=mid+1
        //if checks where both are true if that if fails then one or both must have been wrong? i dont think both can we wrong since slope at least one condition must be true cause only 1 peak? if multiple peaks mid might be lesser than both left and right
        //we check which is true by first checking a single condition individually if that turns true run that code        //if that turns false then the other must have been true 
        else high = mid-1
    }
    return -1
}
console.log(find_peak_element([1,2,3,4,5,6,7,8,5,1]));//7
console.log(find_peak_element([1,2,1,3,5,6,4]));//5// 2 peaks here 1 and 5 brute returned 1 and this return 5
