import bounded_exponentiation from "./bounded_exponentiation"
function nth_root_of_m(n, m) {
    let low = 1
    let high = m
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        let exp = bounded_exponentiation(mid, n, m)
        if(exp === m) return mid
        else if(exp > m) high = mid-1
        else low = mid+1
    }
    return -1
}
console.log(nth_root_of_m(3, 27));
console.log(nth_root_of_m(4, 69));
