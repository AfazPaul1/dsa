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
// 5 . Print the given input string in ‘X’ format.
// Note: The string length will be of odd length.
// g           s
//  e         k 
//   e       e  
//    k     e
//     s   g
//      f r
//       o
//      f r
//     s   g
//    k     e
//   e       e
//  e         k
// g           s
