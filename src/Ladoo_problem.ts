function divideLadoo(n:number, A:number[]) {
    const hash = new Map<number, number>()
    for (const ele of A) {
        hash.set(ele, (hash.get(ele) || 0) + 1)
    }
    return [...hash.values()].length
}

console.log(divideLadoo(5, [3, 3, 1, 2, 4]));
