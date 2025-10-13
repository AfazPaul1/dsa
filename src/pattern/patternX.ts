function patternX(str) {
    let len = str.length
    for (let i = 0; i < len; i++) {
        let pattern  =  ""
        let k = len - i - 1
        for (let j = 0; j < len; j++) {
            if (j === i || j === k) {
                pattern+=str[j]
            } else {
                pattern+=" "
            }
        }
        console.log(pattern);
               
    }
}
console.log(patternX("geeksforgeeks"));
