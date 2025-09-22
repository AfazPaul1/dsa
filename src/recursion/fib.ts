function fib(n:number, cache:number[]): number{
    if (cache[n] !== undefined) {
        return cache[n]
    }
    if(n === 0 ) return 0
    else if ( n === 1) return 1
    else {
        console.log(n);
        
        let result =  fib(n-1, cache) + fib(n-2, cache)
        cache[n] = result
        return result
    }
}
console.time()
//console.log(fib(30));
//832040
//default: 9.21ms
console.log(fib(7, []));
//102334155
//default: 1.030s
console.timeEnd()
// λ npx tsx fib.ts
// 7
// 6
// 5
// 4
// 3
// 2
// 13
// default: 1.526ms