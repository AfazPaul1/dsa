function palindrome(str: string, n:number, i:number) { 
    if(i >= n/2) return true
    console.log(str[i], str[n-i-1]);
    
    if (str[i] !== str[n-i-1]) {
        return false
    }
    return palindrome(str, n, i+1)
}
//console.log(palindrome("madam", 5, 0));
// m m
// a a
// d d
// true
//console.log(palindrome("hello", 5, 0))
// h o
// false
//console.log(palindrome("Able was I ere I saw Elba".toLowerCase(), 25, 0));
//console.log(palindrome("NaomiImoan".toLowerCase(), 10, 0));
console.log(palindrome("Naomi5moan".toLowerCase(), 10, 0));
