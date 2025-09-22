function power(x:number, n:number, acc:number) {
    if (n === 0) {
        return acc
    }
    acc = acc*x
    return power(x, n-1, acc)
}
console.log(power(2, 5, 1));
