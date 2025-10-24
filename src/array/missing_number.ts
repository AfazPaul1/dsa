function missing_number(arr, N) {  
    let xor1 = 0
    let xor2 = 0
    for (let i = 0; i < arr.length; i++) {
        xor1 = xor1^arr[i]
        xor2=xor2^(i+1)
    }
    xor2=xor2^N
    return xor1^xor2
}    
console.log(missing_number([1,2,4,5], 5));