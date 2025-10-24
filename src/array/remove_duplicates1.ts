//You are given a sorted array arr[] containing positive integers. 
// Your task is to remove all duplicate elements from this array such that 
// each element appears only once. 
// Return an array containing these distinct elements in the same order as they appeared.
function removeDuplicates1(arr) {
    let noDup = [arr[0]]
    for(let j = 1; j< arr.length; j++) {
        if(noDup[noDup.length-1]!== arr[j] ) {//should have been checking the last element i pushed into the new array//also that i was useless i could use it to insert into the noDUp but not necessary guess i got confused by 2 pointer
            noDup.push(arr[j])
        }
    }
    return noDup
}
console.log(removeDuplicates1([1, 2, 2, 2, 3, 4, 5, 6, 6]));
