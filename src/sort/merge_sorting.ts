function mergeSort(arr:number[], low:number, high:number) {
    //let mid = Math.round((low+high)/2)// rounds 2.5 to 3 rounds to nearest integer
    //need to round down
    let mid = Math.floor((low+high)/2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid+1, high)
    merge(arr, low, mid, high)
    return arr

}
console.log(mergeSort([13, 46, 24, 52, 20, 9], 0, 5));

function merge(arr:number[], low:number, mid:number, high:number) {
    const temp = []
    let left = low
    let right = mid+1
    while (left <= mid && right <= high) {
        if (arr[left] < arr[right]) {
            temp.push(arr[left])
            left++
        } else {
            temp.push(arr[right])
            right++
        }
        //console.log(temp, left, right);   
    }
    while (left <= mid) {
        temp.push(arr[left])
        left++
    }
    while (right <=high) {
        temp.push(arr[right])
        right++
    }
    arr = [...temp]
    //return temp
    
}  
console.log(merge([13, 24, 46, 9, 20, 52], 0, 2, 5));
