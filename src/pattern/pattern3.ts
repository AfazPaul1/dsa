function pattern3(n:number) {
    for (let i = n; i > 0; i--) {
        let pattern = ""
        for (let j = 0; j < i; j++) {
            pattern+="*"
        }
        console.log(pattern)
    }
    return true
}
console.log(pattern3(5))