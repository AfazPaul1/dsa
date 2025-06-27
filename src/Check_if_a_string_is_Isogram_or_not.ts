function isIsogram(s:String) {
    const hash = new Map<string, number>()
    for (const ele of s) {
        hash.set(ele, (hash.get(ele) || 0) + 1)
    }
    for (const ele of hash.values()) {
        if(ele > 1) return false
    }
    //console.log(1);
    return true
    //console.log(hash);
    
}

console.log(isIsogram("machinee"));
