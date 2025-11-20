function find_sqrt(N:number) {
    let low = 0
    let high = N
    while(low <= high) {
        let mid = Math.floor((low+high) /2)
        if((mid*mid) > N) high = mid-1
        else low = mid+1
    }
    return high
}
console.log(find_sqrt(36));//6
console.log(find_sqrt(28));//5
