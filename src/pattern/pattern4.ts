function pattern4(n:number) {
    for (let i = 0; i < n; i++) {
        let pattern = ""
        for (let j = 0; j < i+1; j++) {
            pattern+=j

        }
        console.log(pattern);
        
        
    }

}
console.log(pattern4(5));
