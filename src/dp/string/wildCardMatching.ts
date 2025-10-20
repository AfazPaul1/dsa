 function wildCard(pattern:string, memo, s, i, j) {
    if (i < 0 && j < 0) return true
    if (i < 0 && j >= 0) return false
    if (i > 0 && j < 0 ) { 
        for (let ii = 0; ii <= i; ii++) {
            if (pattern[ii] !== '*') {
                return false
            }
        }
        return true
    }
    if (memo[i][j]) {
        
    }
    if (pattern[i] === s[j] || pattern[i] === '?') {
        return wildCard(pattern, s, i-1, j-1)
    }
    if (pattern[i] === '*') {
        return wildCard(pattern, s, i-1, j) || wildCard(pattern, s, i, j-1)
    }
    return false
}
let pattern  = 'ab*cd'
let string1 = 'abdejcd'
let memo = Array(string1.length).fill(0).map(() => Array(pattern.length).fill(-1))
console.log(memo);

console.log(wildCard(pattern, string1, memo, pattern.length-1, string1.length-1));
