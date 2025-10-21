function second_largest(arr) {
    arr.sort((a, b) => a-b) //nlogn
    let i = arr.length-2
    let secondLargest = -1
    while(arr[i] === arr[arr.length-1] && i >= 0) {
        i--
    }
    if(i < 0) {
        console.log(" no second largest");
        return
    } else {
        secondLargest =  arr[i]
        return secondLargest
    }
    
}

console.log(second_largest([14, 9, 15, 12, 6, 8, 13, 15,15,15]));
console.log(second_largest([3,2,1,5,2, 5]));
console.log(second_largest([7,7,7,7,7]));


