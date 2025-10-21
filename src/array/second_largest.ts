function second_largest(arr) {
    let max  = arr[0]
    let secondLargest = -1
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            secondLargest = max
            max = arr[i]
        }
        else if(arr[i] > secondLargest && arr[i] < max) {
            secondLargest = arr[i]
        }//else if is executed the most times so should i swap the conditions?
    }
    return secondLargest
}

console.log(second_largest([14, 9, 12, 6, 8, 13, 18, 15, 8, 9, 2, 5, 16]));
//16
//3
console.log(second_largest([3,2,1,5,2, 5]));
//console.log(second_largest([7,7,7,7,7]));


