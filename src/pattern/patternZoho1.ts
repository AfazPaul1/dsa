function patternZoho(n) {
    for (let i = 1; i <=2*n; i++) {
        let noOfSpaces = i <= n ? (2*n)-i :i        
        let noOfCols = i > n ? (2*n)-i : i
        let pattern = ""
        let tempPattern = ""
        for (let j = 0; j <= noOfSpaces ; j++) {
            pattern+=" "
        }
        for (let k = noOfCols; k > 0; k--) {
            tempPattern+=`${k} `
            
        }
        pattern+=reverseStr(tempPattern)
        console.log(pattern);
        
    }
}
console.log(patternZoho(4));
function reverseStr(str) {
    return (str === "") ? "" : reverseStr(str.substr(1)) + str.charAt(0)
}
//  1
//         1 2
//        1 2 3
//       1 2 3 4
//        1 2 3
//         1 2
//          1
