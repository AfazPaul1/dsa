 function pattern28(n:number) {
    for (let i = 0; i < 2*n; i++) {
        let totalCols = i < n? i : (2*n) -i
        let totalSpaces = n - totalCols
        let pattern = ""
        for (let s = 0; s < totalSpaces; s++) {
            pattern+=" " 
        }
        for (let j = 0; j < totalCols; j++) {
            pattern+="*"
            
        }
        console.log(pattern);
        
        
    }
 }
 console.log(pattern28(5));
     
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *
