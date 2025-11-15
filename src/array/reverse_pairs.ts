function reverse_pairs(array: number[]) {
    return mergeSort(array, 0, array.length-1)
}
console.log(reverse_pairs([1,3,2,3,1]));//2
console.log(reverse_pairs([3,2,1,4]));//1
console.log(reverse_pairs([40, 25, 19, 12, 9,6, 2]));//1
function mergeSort(array:number[], low:number, high:number) {
    let count = 0
    if (low === high) {
        return count
    }
    let mid = Math.floor((low+high)/2)
    count+=mergeSort(array, low, mid)
    count+=mergeSort(array, mid+1, high)
    count+=findReversePairs(array, low, mid, high)
    merge(array, low, mid, high)
    return count
}
function merge(array:number[], low:number, mid:number, high:number) {
    const temp = []
    let left = low
    let right = mid+1
    while (left <= mid && right <= high) {
        if (array[left] < array[right]) {
            temp.push(array[left])
            left++
        } else {
            temp.push(array[right])
            right++
        }
    }
    while (left <= mid) {
        temp.push(array[left])
        left++
    }
    while (right <=high) {
        temp.push(array[right])
        right++
    }
    for (let i = 0; i < temp.length; i++) {
        array[low] = temp[i] 
        low++
    }   
}
function findReversePairs(array, low, mid, high) {
    let count1 = 0
    let right = mid+1
    for (let left = low; left <= mid; left++) {
        while(right <= high && (2*array[right]) < array[left]  ){
            right++ 
        }  
        count1+=right-(mid+1)
    }
    return count1
}