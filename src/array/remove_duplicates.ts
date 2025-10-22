//Remove Duplicates in-place from Sorted Array
//Input: arr[]=[1,1,2,2,2,3,3]
//Output: [1,2,3,_,_,_,_]
//Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.
function removeDuplicates(arr) { 
    const newSet = new Set(arr) //maybe ill try using a custom set
    let i = 0
    for (const ele of newSet ) {
        arr[i] = ele
        i++
    }
    return i
}
console.log(removeDuplicates([1,2,3,3,4,5,5,5]));
//set takes nlogn //actually idk about this is this a hashset or bbst?
// the for is N
//hence nlogn + N 
//space complexity is N cause worst case the created set could be the same size as input arr