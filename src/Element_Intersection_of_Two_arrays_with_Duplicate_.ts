function intersect(a:number[], b:number[]) {
    const newa = new Set(a)
    const newb = new Set(b)
    const iterator = newa.size < newb.size? newa.keys() : newb.keys()
    const res:number[] = []
    const other = newa.size < newb.size? newb : newa

    console.log(newa, newb, iterator, res);
    for (const ele of iterator) { 
        if(other.has(ele)) {
            res.push(ele)
        }
    }
    return res
    //The time saved by avoiding a nested loop (O(A * B)) far exceeds the time spent on creating the Set (O(N)).
    //so creating the set first is ok
}
console.time("minSubsets execution time");
console.log(intersect([1, 2, 1, 3, 1], [3, 1, 3, 4, 1]));
console.timeEnd("minSubsets execution time");