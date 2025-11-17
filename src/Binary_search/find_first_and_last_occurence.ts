function find_first_occurence(array, target) {
    let first  = array.length
    let low = 0
    let high = array.length-1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] >= target) {
            first = mid
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return first
}
function find_last_occurence(array, target) {
    let last = array.length
    let low = 0
    let high = array.length-1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] > target) {
            last = mid
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
    let last = find_last_occurence(array, target)
    //these are 2 edge cases like if lb was never found hence its value would be n or lb is found but its not the target cause the targest does not exist
    if(first === n || array[first] !== target) return -1
    return [first, last-1]

}
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40], 13));//[2,4]
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40], 40));//[ 6, 6 ]
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40, 41], 40));//[ 6, 6 ]
console.log(find_first_and_last_occurence([3,4,13,13,13,20,40], 60));//-1

