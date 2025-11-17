function find_first_occurence(array, target) {
    let first  = -1
    let low = 0
    let high = array.length-1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] === target) {
            first = mid
            high = mid-1
        } else if(array[mid] < target){
            low = mid+1
        } else {
            high = mid-1
        }
    }
    return first
}
function find_last_occurence(array, target) {
    let last = -1
    let low = 0
    let high = array.length-1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] === target) {
            last = mid
            low = mid+1
        } else if (array[mid] > target){
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return last
}
function find_first_and_last_occurence(array, target) {
    let n = array.length
    let first = find_first_occurence(array, target)
    if (first === -1) return [-1,-1] //if this line turns true it can save log_2n time cause we wont have to compute the other cause we know it doesnt exist at all
    let last = find_last_occurence(array, target)
    return [first, last]

}
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40], 13));//[2,4]
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40], 40));//[ 6, 6 ]
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40, 41], 40));//[ 6, 6 ]
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40], 60));//-1

