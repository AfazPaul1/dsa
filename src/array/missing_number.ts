//summation
function missing_number(arr, N) {  
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    let ogSum = N*(N+1)/2
    return ogSum-sum
}    
console.log(missing_number([1,2,4,5], 5));