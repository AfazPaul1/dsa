function nth_root_of_m(n, m) {
    for (let i = 1; i < m; i++) {
        let sq = find_power(i,n)
        if(sq === m) {
            return i
        }
        else if(sq > m) {
            break
        }
    }
    return -1
}
function find_power(i, n) {
    let exp = 1
    for (let j = 0; j < n; j++) {
        exp*=i
    }
    return exp
}
console.log(nth_root_of_m(3, 27));
console.log(nth_root_of_m(4, 69));
