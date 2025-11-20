export default function binary_exponentiation(n, m) {
    let res = 1
    while(m > 0) {
        if(m % 2 === 1) res*=n
        n*=n
        m=Math.floor(m/2)
    }
    return res
}
console.log(binary_exponentiation(3, 13));//1594323
console.log(binary_exponentiation(5, 2));//25
console.log(binary_exponentiation(3, 3));//27
