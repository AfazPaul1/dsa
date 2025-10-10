function quickSort(arr, low, high) {
    if(low < high) {
        let pivot = findPivot(arr, low, high)
        quickSort(arr, low, pivot-1)
        quickSort(arr, pivot+1, high)
        
    }
    return arr
}
console.log(quickSort([4,6,2,5,7,9,1,3], 0, 7))

function findPivot(arr:number[], low:number, high1:number) {
    let pi = arr[low]
    let i = low
    let j = high1
    while(i<j){
        while(arr[i] <= pi && i <= high1) { // i value increases above high in [3,2]  
            i++
        }
        while(arr[j] >= pi && j > low) { //for [1.3.2] j becomes -1
            j--
        }
    if (i<j) [arr[i], arr[j]] = [arr[j], arr[i]]
    } 
    [arr[low], arr[j]] = [arr[j], arr[low]]
    return j
}
