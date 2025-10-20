function palindrome(str, n, i) {
    if (i >= n/2) {
        return true
    }
    if (str[i] !== str[n-i-1]) return false
    return palindrome(str, n, i+1)
}
//const str1 = "malayalam"
//console.log(palindrome(str1, str1.length, 0));
const sent = "he knows malayalam"
function sentPal(str) {
    let newSent = str.split(" ")
    let result = []
    for (const ele of newSent) {
        if(!palindrome(ele, ele.length, 0)) {
            result.push(ele)
        }
    }
    return result
}
console.log(sentPal(sent));

