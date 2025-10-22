//Remove Duplicates in-place from Sorted Array
//Input: arr[]=[1,1,2,2,2,3,3]
//Output: [1,2,3,_,_,_,_]
//Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.
function removeDuplicates(arr) { 
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            arr[i+1] = arr[j]
            i++
        }
    }
    return i+1
}
console.log(removeDuplicates([1,2,3,3,3,3,4,4,4,5]));
//[ 1,2,3,4,3,4,5,4,5,5,]
