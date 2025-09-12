function distinctSubstring(s:string):number {
    const hash = new Set()
    for (let i = 0; i < s.length; i++){
        if (s[i+1]) hash.add(`${s[i] + s[i+1]}`)
    }
    console.log(hash);
    
    return hash.size
}
console.log(distinctSubstring("XYZ"));
//Set(2) { 'XY', 'YZ' }
console.log(distinctSubstring("ABCABABA"));
//Set(4) { 'AB', 'BC', 'CA', 'BA' }
