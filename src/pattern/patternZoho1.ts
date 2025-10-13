function patternZoho(n) {
    
    let sum = 0
    for (let i = 1; i <=2*n; i++) {
        let noOfSpaces = i <= n ? (2*n)-i :i        
        let noOfCols = i > n ? (2*n)-i : i
        let pattern = ""
        for (let s = 0; s <= noOfSpaces ; s++) {
            pattern+=" "
        }
        sum+=noOfCols
        for (let i = sum; i >= noOfCols; i--) {
            pattern+=` ${i}`
        }
        console.log(pattern);
        
    }
}
console.log(patternZoho(4));
//          1
//         3 2
//        6 5 4 3
//       10 9 8 7 6 5 4
//        13 12 11 10 9 8 7 6 5 4 3
//         15 14 13 12 11 10 9 8 7 6 5 4 3 2
//          16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
//           16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0      
// undefined
//expected
//i should find out what to print i can see that the nuber to print is the sum of previous numbers
//     1
//    3 2
//   6 5 4
// 10 9 8 7
// 10 9 8 7
//   6 5 4
//    3 2
//     1
