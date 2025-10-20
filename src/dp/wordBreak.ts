function wordBreak(s, wordDict) {
    const hash = new Set(wordDict)
    let maxLen = 0
    for (const word of hash) {
        maxLen = Math.max(maxLen, word.length)
    }
    let n = s.length
    let dp = new Array(n+1).fill(false)
    dp[0] =true
    for (let i = 1; i <= n; i++) {
        for (let j = i; j >=  Math.max(0, i- maxLen); j--) {
            if (dp[j] && hash.has(s.substring(j, i))) {
                dp[i]=true
                break
            }
            
        }  
    }
    return dp[n]
}
let s  = 'catsandog'
let wordDict = ['cats', 'dog', 'sand', 'and', 'cat']
console.log(wordBreak(s, wordDict));
