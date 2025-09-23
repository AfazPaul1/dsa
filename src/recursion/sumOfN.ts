function sumOfN(n:number, sum:number):number {
    if (n === 0) {
        return sum
    } 
    sum = sum+n
    return sumOfN(n-1, sum)
}
console.log(sumOfN(5, 0));
