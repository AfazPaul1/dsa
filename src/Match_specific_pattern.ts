function findMatchedWords(dict:string[], n:number, pattern: string) {
        const findSignature = (pattern:string):string => {
            let patternCode = ""
            const hash = new Map()
            let i = 0
            for (const letter of pattern) {                
                if (!hash.has(letter)) {
                    hash.set(letter, i)
                    i++
                }
                patternCode+=hash.get(letter)
                //console.log(hash);
            }        
            return patternCode
        }
        //return findSignature("a5cb")
        const patternToMatch = findSignature(pattern)
        const wordsMatchingThePattern:string[] = []
        for (const word of dict) { //
            if (findSignature(word) === patternToMatch) {
                wordsMatchingThePattern.push(word)
            }
        }
        return wordsMatchingThePattern
}
console.log(findMatchedWords(["abb","abc","xyz","xyy"], 4, "foo"));
console.log(findMatchedWords(["abccc","abc","xyz","xyy"], 4, "foaaa"));
console.log(findMatchedWords(["aba","abc","xyz","xyy"], 4, "a5a"));