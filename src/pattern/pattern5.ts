function pattern5(n) {
    for (let i = 0; i < n*2; i++) {
        let pattern = ""
        const totalCols = i < n? i : (2*n)-i
        for (let j = 0; j < totalCols; j++) {
             pattern+="*" 
        }
        console.log(pattern);
        
        
    }
}
console.log(pattern5(5));
