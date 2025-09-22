//functional
// function fact(n:number):number {
//     if (n === 0) return 1
//     return n * fact(n-1) 
// }
// console.log(fact(5));

//parametrized
function fact(n:number, sum:number):number {
    if (n===1) {
        return sum
    }
    console.log(sum);
    
    return fact(n-1, n*sum)
}
console.log(fact(5, 1));
