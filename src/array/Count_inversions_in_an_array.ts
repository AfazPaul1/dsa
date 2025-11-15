
function mergeSort1(array, low, high) {
    let count = 0
    if(low === high) return count
    
    let mid = Math.floor((low+high)/2)
    count+=mergeSort1(array, low, mid)
    count+=mergeSort1(array, mid+1, high)
    count+= merge(array, low, mid, high)
    return count
}
 
function merge(array, low, mid, high) {
    let left = low
    let right = mid+1
    let temp = []
    let count1 = 0
    while(left <= mid && right <= high) {
        if(array[left] <= array[right]){
            temp.push(array[left])
            left++
        } else {
            
            temp.push(array[right])
            count1+=(mid-left+1)
            right++
        }
    }
    while(left <= mid){
        temp.push(array[left])
        left++
    }
    while(right <= high){
        temp.push(array[right])
        right++
    }
    for (let i = 0; i < temp.length; i++) {
        array[low] = temp[i]
        low++  
    }
    return count1
}
function Count_inversions_in_an_array(array) {
    
    let fiCount = mergeSort1(array, 0, array.length-1)
    return [array, fiCount]
}
console.log(Count_inversions_in_an_array([5,4,3,2,1]));
console.log(Count_inversions_in_an_array([5,3,2,1,4]));