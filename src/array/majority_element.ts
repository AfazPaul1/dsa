//most voting algorithm
function majority_element(arr:number[]) {
    let count = 0
    let candidate = 0
    let n = arr.length
    for (let i = 0; i < arr.length; i++) {
        if(count === 0) {
            candidate = arr[i]
            count=1
        }
        else if (arr[i] === candidate) {
            count++
        }
        else {
            count--
        }
    }
    //only need this step if there isnt gauranteed to be a majority element
    let count1 = 0
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] === candidate) count1++
    }
    if(count1 > n/2) return candidate
    else return -1
    
}
console.log(majority_element([2,2,3,3,1,2,2,3,3,3,3,3,3]));
console.log(majority_element([1,2,3,4,5,6]));
console.log(majority_element([4,4,2,4,3,4,4,3,2,4]));
console.log(majority_element([3,2,3]));

