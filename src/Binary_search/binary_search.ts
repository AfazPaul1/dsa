function binary_search(array, target) {
    let low = 0
    let high = array.length-1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] === target) {
            return target
        }
        else if(array[mid] > target) {
            high = mid-1
        } else {
            low = mid+1
        }
    }
    if(low > high) return -1
}
console.log(binary_search([3, 4, 6, 7, 9, 12, 16, 17], 6));//6
console.log(binary_search([3, 4, 6, 7, 9, 12, 16, 17], 16)); //16
console.log(binary_search([3, 4, 6, 7, 9, 12, 16, 17], 88));//88
