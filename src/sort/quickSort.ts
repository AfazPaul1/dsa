function quickSort(arr, low, high) {
    
    if(low < high) {
        let pivot = findPivot(arr, low, high)
        quickSort(arr, low, pivot-1)
        quickSort(arr, pivot+1, high)
        
    }
    return arr
}
//console.log(quickSort([4,6,2,5,7,9,1,3], 0, 7)) //[1, 2, 3, 4, 5, 6, 7, 9]
//console.log(quickSort([4,6,2,5,7,9,1,3,10], 0, 8))//[1, 2, 3,  4, 5,6, 7, 9, 10]
console.log(quickSort([4,6,2,5,7,9,1,3,4], 0, 8)) //[1, 2, 3, 4, 4, 5, 6, 7, 9]
//saya that suppose there were 2 4's they coulbe be placed either on the right or left
//changing the j while to place all elements greatee than pivot ensures consistency
//now all elements lesser than or equal will get placed on the left
//havent seen existing thing cause any problems tho
//I CAN SEE THE problem in the dry run
//when i =1(6) and j = 8(4) i and j wont swap cause j will get decremented cause 4 is equal to 4 so 3 and 6 will swap instead [4,3,2,5,7,9,1,6,4,]
//by chnaging to arr[j] > pi we can ensure 4 will get swapped to the left //[4,4,2,5,7,9,1,3,6,]
function findPivot(arr:number[], low:number, high1:number) {
    let pi = arr[low]
    let i = low
    let j = high1
    while(i<j){
        while(arr[i] <= pi && i <= high1) {   
            i++
        }
        while(arr[j] > pi && j > low) { 
            j--
        }
    if (i<j) [arr[i], arr[j]] = [arr[j], arr[i]]
    } 
    [arr[low], arr[j]] = [arr[j], arr[low]]
    return j
}
