function Count_Even_Numbers(s: string) {
    const hash = new Map()
    for (const ele of s) {
        hash.set(ele, (hash.get(ele) || 0) + 1)
    }
    let count_of_distinct_even = 0
    for (const value of hash.values()) {
        if(value % 2 == 0) count_of_distinct_even = count_of_distinct_even+1
    }
    return count_of_distinct_even
}
console.log(Count_Even_Numbers("abacaba" ));