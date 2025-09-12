function findMatchedWords(dict:string[], n:number, pattern: string) {
        
        const findSignature = (pattern:string):string => {
            let patternCode = ""
            let sameLength = 0 // we use this samelength to ensure the same number is repeated
            //but this might not be ideal and not quite clear?       
            for (let i = 0; i < pattern.length; i++) {
                if (pattern[i] === pattern[i-1] ) {
                    if(sameLength===0) sameLength = i
                    patternCode += `${sameLength-1}` //  
                }
                // else if (pattern[i] === pattern[i-1] && pattern[i] === pattern[i-2] && pattern[i+1] === pattern[i])  {
                //     patternCode.push(3)
                // }
                else {
                    sameLength = 0
                    patternCode += `${i}`
                }
            }        
            return patternCode
        }

        const patternToMatch = findSignature(pattern)
        const wordsMatchingThePattern:string[] = []
        for (const word of dict) { //
            if (findSignature(word) === patternToMatch) {
                wordsMatchingThePattern.push(word)
            }
        }
        return wordsMatchingThePattern
        //For each word (there are N of them), you compute a signature in O(K) (pattern length).
        //Then you compare signatures in O(K).
        //So overall: O(N*K)
        // for (const element of dict) { 
        //     const patternOfEle = returnPattern(element)
        // }
        //this passes the test but this is based on adjacency
        //like maybe aba - will be 123
        //it will match abc which is also 123
        //but i might be presented a case where aba should be 121
        //cause a is same irrespective of position and should have the same signature
        //one a cant have signature 1 and another a few letters later have signature 3
        //aba should only match with cbc and not abc - edge case
        //saw that a maop where we match a specific seen word to a signature and use that if seen again
}
console.log(findMatchedWords(["abb","abc","xyz","xyy"], 4, "foo"));
console.log(findMatchedWords(["abccc","abc","xyz","xyy"], 4, "foaaa"));
console.log(findMatchedWords(["aba","abc","xyz","xyy"], 4, "a5a"));

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