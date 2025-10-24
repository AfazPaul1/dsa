//summation
function missing_number(arr, N) {  
    let xor1 = 0
    let xor2 = 0
    for (let j = 1; j <= N; j++) {
        xor1=xor1^arr[j-1]
        xor2 = xor2^j
    }
    xor1=xor1^arr[arr.length-1]
    return xor1^xor2
}    
console.log(missing_number([1,2,4,5], 5)); //6
