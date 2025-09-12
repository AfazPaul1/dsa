function minIndexChar(s1:string, s2:string) {
    const minString = s1.length<s2.length? s1 :s2
    const maxString = s1.length>s2.length? s1: s2
    const createHash = (s:string):Map<string, number[]> => {
        const hash = new Map()
        for (let i = 0; i < s.length; i++) {
            if (!hash.has(s[i])) {
                hash.set(s[i], [])
            }
            hash.get(s[i]).push(i)
        }
        return hash
    }
    const minHash = createHash(minString)
    const maxHash = createHash(maxString)
    console.log(minHash, maxHash);
    
    for (const [key, value] of minHash) {
        if (maxHash.has(key)) {
            //this approach isnt very natural?
            console.log(value[0], maxHash.get(key)![0]);
            //we are getting thr whole array here rght?
            //if (value < maxHash.get(key)!) {
            if (value[0] < maxHash.get(key)![0]!) { //using non null assertion here i dont think the value can ever be undefined
                return value
            } else {
                return maxHash.get(key)
            }
        }
    }
    return -1
}
console.log(minIndexChar("geeksforgeeks", "et"));
console.log(minIndexChar("adcffaet", "onkl"));
