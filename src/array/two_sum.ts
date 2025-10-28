function two_sum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i ===j) continue
            if(arr[j] + arr[i] === target)  return [i,j]
        }
    }

}
console.log(two_sum([2,6,5,8,11], 14));
