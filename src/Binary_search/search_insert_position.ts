function search_insert_position(array: number[], target:number) {
    let low = 0
    let high = array.length-1
    let ans = array.length
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] >= target) {
            ans = mid
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return ans
}
console.log(search_insert_position([3, 4, 7, 9, 12, 16, 17], 6));//6
console.log(search_insert_position([3, 4, 6, 7, 9, 12, 16, 17], 15)); //16
console.log(search_insert_position([3, 4, 6, 7, 9, 12, 16, 17], 88));//8
