function missing_number(arr, N) {
    
    for (let i = 1; i <= N; i++) {
        let flag = 0
        for (let j = 0; j < arr.length; j++) {
            if (i === arr[j]) {
                flag = 1
                break
            }
        }
        if (flag === 0) {
            return i
        }
        
    }
    return -1
}
console.log(missing_number([1,2,4,5], 5));
