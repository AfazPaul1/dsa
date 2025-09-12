function distinctSubstring(s:string):number {

    let numberOfDistinctSubstring:number=0
    const hash = new Set()
    for (let i = 0; i < s.length; i++){
        console.log(i);
        hash.add(`${s[i] + s[i+1]}`)
    }
    console.log(hash);
    
    return numberOfDistinctSubstring
}
console.log(distinctSubstring("ABCAB"));
//Set(4) { 'AB', 'BC', 'CA', 'Bundefined' }