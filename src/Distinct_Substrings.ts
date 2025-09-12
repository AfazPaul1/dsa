function distinctSubstring(s:string):number {

    let numberOfDistinctSubstring:number=0
    const hash = new Set()
    for (let i = 0; i < s.length; i++){
        console.log(i);
        
        if (!hash.has(`${s[i] + s[i+1]}`)) {
            numberOfDistinctSubstring++
        } else {
            console.log(i, `${s[i] + s[i+1]}`);
            
            hash.add(`${s[i] + s[i+1]}`)
        }
    }
    console.log(hash);
    
    return numberOfDistinctSubstring
}
console.log(distinctSubstring("ABCAB"));
