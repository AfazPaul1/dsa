function largest_element(arr){
    arr.sort((a,b) => a-b)
    return arr
}
console.log(largest_element([3,2,1,5,2]));
function insertionSort(arr, n) {
    for(let i = 0; i < n; i++) {
        let j = i
        while( j > 0 && arr[j-1] > arr[j]) {
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            j--
        }
    }
    return arr
}
//console.log(insertionSort([14, 9, 15, 12, 6, 8, 13], 7));

