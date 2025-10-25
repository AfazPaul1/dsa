function consecutive_ones(arr) {
    let max = 0
    let conseq = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            conseq +=1
            max = Math.max(max, conseq)
        } else {
            conseq=0
        }
        
    }
    
    return max
}
console.log(consecutive_ones([1,1,0,1,1,1]));

