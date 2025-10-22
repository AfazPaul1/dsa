//You are given a sorted array arr[] containing positive integers. 
// Your task is to remove all duplicate elements from this array such that 
// each element appears only once. 
// Return an array containing these distinct elements in the same order as they appeared.
function removeDuplicates1(arr) {
    let i = 0
    let noDup = [arr[0]]
    for(let j = 1; j< arr.length; j++) {
        if(arr[i]!== arr[j] && arr[j] !== undefined) {
            noDup.push(arr[j])
            i++
        }
    }
    return noDup
}
console.log(removeDuplicates1([1, 2, 2, 3, 4, 5, 6, 6]));
//[1, 2, 3, 4,5, 6, 6]
//when j = 7 and i = 5 the comaprision turn true and inserts another 6
//the issue is probably with me inserting j