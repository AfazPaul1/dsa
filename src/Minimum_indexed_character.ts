function minIndexChar(s1:string, s2:string) {
    const s2Set = new Set(s2.split(""))
    for (let i = 0; i < s1.length; i++) {
        if (s2Set.has(s1[i])) {
            return i
        }  
    }
    return -1
}

console.log(minIndexChar("gkforgeeks", "set"));
console.log(minIndexChar("adcffaet", "onkl"));
//6
//-1