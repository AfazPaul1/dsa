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
function number_of_occurences(array, target) {
    let n = array.length
    let first = find_first_occurence(array, target)
    if (first === -1) return -1
    let last = find_last_occurence(array, target)
    return last-first+1

}
console.log(number_of_occurences([3,4,13,13,13,20,40], 13));//[2,4]
console.log(number_of_occurences([3,4,13,13,13,20,40], 40));//[ 6, 6 ]
console.log(number_of_occurences([3,4,13,13,13,20,40, 41], 40));//[ 6, 6 ]
console.log(number_of_occurences([3,4,13,13,13,20,40], 60));//-1

