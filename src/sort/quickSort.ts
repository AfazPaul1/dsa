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
        while(arr[i] <= pi) {//did arr[pi] while pi is not an index but the value
            i++
        }
        while(arr[j] >= pi) {
            j--
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    //[4,3,2,7,1,9,5, 6,] this is how it looks when loop finally fails
    //that last step was unnecessary
    [arr[pi], arr[j]] = [arr[j], arr[pi]] //this iswrong since pi is a value and not a index
    //[4,3,2,1,7,9,5,6]
    return pi
}
//[4,3,2,5,7,9,1, 5,]
