function fib(n:number): number{
    if(n === 0 ) return 0
    else if ( n === 1) return 1
    else {
        return fib(n-1) + fib(n-2)
    }
}
console.log(fib(7));
// 7
// 6
// 5
// 4
// 3
// 2
// 2
// 3
// 2
// 4
// 3
// 2
// 2
// 5
// 4
// 3
// 2
// 2
// 3
// 2
// undefined