function eight(arr) {
    const hash = new Map()
    for (const ele of arr) {
        hash.set(ele, (hash.get(ele) || 0) + 1)
    }
    return hash
}
console.log(eight([1,2,45,67,1,88]));
