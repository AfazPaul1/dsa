function pattern30(n) {
    for (let i = 1; i <= n; i++) {
        let pattern = ""
        let numberOfSpaces = n-i
        for (let s = 0; s < numberOfSpaces; s++) {
            pattern+="  "//double space
        }
        for (let j = i; j > 0; j--) {
            pattern+=`${j} `
        }
        for (let k = 2; k <= i; k++) { // was confused how i was going to do the increasing pattern realized that i could just do another for which increases and adds to the pattern no need to look for a condition which works for both
            pattern+=`${k} `
            
        }
        console.log(pattern);
        
    }
}
console.log(pattern30(5));
