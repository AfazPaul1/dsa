function second_largest(arr) {
    let max  = arr[0]
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) max = arr[i]
        
    }
    return max
}

console.log(second_largest([14, 9, 15, 12, 6, 8, 13]));
