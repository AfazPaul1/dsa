function pattern1(n:number) {
    for (let i = 0; i < 4; i++) {
        let pattern = ""
        for (let j = 0; j <= i; j++) {
                pattern+="*"
        }
        console.log(pattern); 
    }
    return true
}
console.log(pattern1(4));
