const winner = (arr: string[]) => {
    
    const hash = new Map()
    for (const ele of arr) {
        hash.set(ele, ( hash.get(ele) | 0) +1)
    }
    //console.log(hash);
    let winningCandidate = ""
    let winningCount = 0
    for (const [value] of hash) {
        if(value > winningCount) winningCount = value
    }
    for (const [key, value] of hash) {
        if(hash.get(key) > winningCount) {
            winningCount = value
        } else if (hash.get(key) < winningCount) {
            hash.delete(key)
        } else {
            continue
        }
    }
    //console.log(hash,winningCount, winningCandidate);
    
    let i = 0

    for (const [key, value] of hash) {
        
        if (i === 0) {
            winningCandidate = key
            //console.log(hash,winningCount, winningCandidate, i);
        } else {
            console.log(1, key);
            
            let k = 0
            let hisEq = true
            //console.log(key.split(""));
            
            key.split("")
            .forEach((ele: string) => {
                //console.log(ele);
                
                if (winningCandidate.charCodeAt(k) > key.charCodeAt(k) ) {
                    winningCandidate = key
                    hisEq = false
                    //console.log(hash,winningCount, winningCandidate ,key,i, winningCandidate.charCodeAt(k), key.charCodeAt(k));
                }
                else if (winningCandidate.charCodeAt(k) > key.charCodeAt(k)) {
                    //console.log(hash,winningCount, winningCandidate, i, winningCandidate[k].charCodeAt, key[k].charCodeAt);
                    hisEq = false
                }
                else if(winningCandidate.charCodeAt(k) === key.charCodeAt(k) ) {
                    //console.log(hash,winningCount, winningCandidate, winningCandidate.length, key, key.length, i, winningCandidate.charCodeAt(k), key.charCodeAt(k));
                    if(k === winningCandidate.length -1 && hisEq) {
                        console.log(hash,winningCount, winningCandidate, winningCandidate.length, key, key.length, i, winningCandidate.charCodeAt(k), key.charCodeAt(k));
                        winningCandidate = winningCandidate.length < key.length ? winningCandidate : key
                        console.log(winningCandidate);
                        
                    }
                }
                k++
            });            
        }

        i++
    }
    //console.log(winningCandidate, winningCount);
    return winningCandidate 
}

const ans1 = winner([ "johnny","john", "jackie", "johnny", "john", "jackie", "jamie", "jamie", "john", "johnny", "jamie", "johnny", "john"])
console.log(ans1);

winner([ "blake", "clark", "andy"])
