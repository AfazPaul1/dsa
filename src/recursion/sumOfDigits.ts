function sumOfDigits(n:number, sum:number) {
    if (n === 0) {
        return sum
    }
    let digit = n%10
    return sumOfDigits(n/10 | 0, digit+sum) //refer recursion notes
}
console.log(sumOfDigits(12345, 0));
