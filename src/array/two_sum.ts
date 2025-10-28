function two_sum(arr, target) {
    let left = 0
    let right = arr.length-1
    arr.sort((a:number, b:number) => a-b)
    while(left < right) {
        if (arr[left]+arr[right] < target) {
            left++
        } else if (arr[left] + arr[right] > target) {
            right--
        } else {
            return true
        }
    }
    return false  
}
console.log(two_sum([2,6,5,8,11], 14));//2,5,6,8,11
console.log(two_sum([2,6,5,10,11], 14));//2,5,6,10,11

