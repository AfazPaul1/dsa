function secondSmallest(arr)  {
    let smallest = arr[0]
    let sSmallest = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            sSmallest = smallest
            smallest = arr[i]
        }
        else if(arr[i] > smallest && arr[i] < sSmallest) {
            sSmallest = arr[i]
        }
    }
    return sSmallest
}

console.log(secondSmallest([14, 9, 12, 6, 8, 13, 18, 15, 8, 9, 2, 5, 16]));

