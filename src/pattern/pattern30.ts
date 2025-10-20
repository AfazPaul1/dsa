function pattern30(n) {
    for (let i = 1; i <= 2*n; i++) {
        let pattern = ""
        let numberOfSpaces = i <= n? (2*n)-i : i
        let noOfCols =  i > n ? (2*n)-i : i // have already seen this before since pattern 5 where it increases then decreases
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
console.log(pattern30(4));
//17
//                   1 
//                 2 1 2 
//               3 2 1 2 3
//             4 3 2 1 2 3 4
//           5 4 3 2 1 2 3 4 5
//             4 3 2 1 2 3 4
//               3 2 1 2 3
//                 2 1 2
//                   1
// simply no of cols is just it starts from that column no and goes till that ciolumn number
//plainly that
//we compute it