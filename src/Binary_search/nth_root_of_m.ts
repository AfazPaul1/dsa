import binary_exponentiation from "./binary_exponentiation"
function nth_root_of_m(n, m) {
    for (let i = 1; i < m; i++) {
        let sq = binary_exponentiation(i,n)
        if(sq === m) {
            return i
        }
        else if(sq > m) {
            break
        }
    }
    return -1
}
console.log(nth_root_of_m(3, 27));
console.log(nth_root_of_m(4, 69));
