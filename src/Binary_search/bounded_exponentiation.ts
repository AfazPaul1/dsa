export default function bounded_exponentiation(n, m, lim) {
    let exp = 1
    for (let i = 0; i < m; i++) {
        if(exp < lim) exp*=n
        else break
    }
    return exp
}
// console.log(binary_exponentiation(3, 13));//1594323
// console.log(binary_exponentiation(5, 2));//25
// console.log(binary_exponentiation(3, 3));//27
//console.log(bounded_exponentiation(14, 3, 27));
