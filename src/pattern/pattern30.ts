function pattern30(n) {
    for (let i = 1; i < 2*n; i++) {
        let pattern = ""
        let numberOfSpaces = i > n? i-n:(2*n)-i
        let noOfCols =  i > n ? (2*n)-i : i
        for (let s = 0; s < numberOfSpaces; s++) {
            pattern+="  "//double space
        }
        for (let j = noOfCols; j > 0; j--) {
            pattern+=`${j} `
        }
        for (let k = 2; k <= noOfCols    ; k++) { // was confused how i was going to do the increasing pattern realized that i could just do another for which increases and adds to the pattern no need to look for a condition which works for both
            pattern+=`${k} `
            
        }
        console.log(pattern);
        
    }
}
console.log(pattern30(5));
