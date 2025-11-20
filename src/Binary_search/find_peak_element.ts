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
        else if (array[mid] > array[mid+1]) high = mid-1
        //with multiple peaks both the conditions in if could be false so we have to handle it else it would go unhandled
        //in that case it doesnt matter where we go left or right cause there will be peaks on both side
        //actually wait i think the previoud case too handled that lol
        // the else would have handled that case too
        //this is just being specific 
        //the wrong thing would have been to do without the else and a single if and 2 else ifs
        else low=mid+1
    }
    return -1
}
console.log(find_peak_element([1,2,3,4,5,6,7,8,5,1]));//7
console.log(find_peak_element([1,2,1,3,5,6,4]));//5// 2 peaks here 1 and 5 brute returned 1 and this return 5
