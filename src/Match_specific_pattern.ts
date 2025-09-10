function findMatchedWords(dict, n, pattern: string) {
        
        let patternCode = ""
        let sameLength = 0        
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] === pattern[i-1] ) {
                if(sameLength===0) sameLength = i
                patternCode.concat((sameLength-1).toString())
            }
            // else if (pattern[i] === pattern[i-1] && pattern[i] === pattern[i-2] && pattern[i+1] === pattern[i])  {
            //     patternCode.push(3)
            // }
            else {
                sameLength = 0
                patternCode.concat(i.toString())
            }
        }        
        return patternCode
        
        // for (const element of dict) { 
        //     const patternOfEle = returnPattern(element)
        // }
}
console.log(findMatchedWords(["abb","abc","xyz","xyy"], 4, "foo"));
console.log(findMatchedWords(["abb","abc","xyz","xyy"], 4, "foaaa"));

// for (let i = 0; i < pattern.length; i++) {
//             let sameCounter = i //this reserts every for iteration thats not what we want
//we want to capture that i and have it as long as this if is true
//how do i do that?
//             if (pattern[i] === pattern[i-1] ) {
//                 patternCode.push(sameCounter)
//             }
//             // else if (pattern[i] === pattern[i-1] && pattern[i] === pattern[i-2] && pattern[i+1] === pattern[i])  {
//             //     patternCode.push(3)
//             // }
//             else {
//                 sameCounter = 0
//                 patternCode.push(i)
//             }
//         }
//         return patternCode
// }
//console.log(findMatchedWords(["abb","abc","xyz","xyy"], 4, "foaaa"));
//[ 0, 1, 2, 3, 4 ]