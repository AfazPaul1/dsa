function pattern3(n:number) {
    for (let i = 0; i < n; i++) {
        let pattern = ""
        for (let j = 0; j < n-i; j++) {//cause we start from 0
            pattern+="*"
        }
        console.log(pattern)
    }
    return true
} 
console.log(pattern3(5))