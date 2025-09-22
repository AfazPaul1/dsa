function fib(n:number, cache:Map<number, number>): number{
    if (cache.has(n)) {
        return cache.get(n)!
    }
    if(n === 0 ) return 0
    else if ( n === 1) return 1
    else {
        console.log(n);
        
        let result =  fib(n-1, cache) + fib(n-2, cache)
        cache.set(n, result)
        return result
    }
}
console.time()
//console.log(fib(30));
//832040
//default: 9.21ms
const cache = new Map()
console.log(fib(45, cache));
// 832040
// default: 3.943ms
//below older
//102334155
//default: 1.030s
//below is a bigger number but it took just 5ms instead of 1 second
//so ofc efficient
//maybe i can also check array vs set later
//1134903170
//default: 5.555ms
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