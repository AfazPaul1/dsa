function upperBound(array, x) {
    let ans = array.length
    let low = 0
    let high = array.length - 1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] > x) {
            ans = array[mid]
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return ans

}
console.log(upperBound([1,2,2,3], 2));
console.log(upperBound([3,5,8,9,15,19], 10));
console.log(upperBound([3,5,8,9,15,19], 9));

