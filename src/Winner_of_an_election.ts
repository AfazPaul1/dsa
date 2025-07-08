const winner = (arr: string[]) => {
    const hash = new Map()
    for (const ele of arr) {
        hash.set(ele, ( hash.get(ele) | 0) +1)
    }
    let winningCandidate = ""
    let winningCount = 0
    for (const [key, value] of hash) {
        if(value > winningCount) {
            winningCount = value
            winningCandidate = key
        } else if (value === winningCount) {
            if(winningCandidate > key) winningCandidate = key
        }
    }
    
    return winningCandidate 
}

const ans1 = winner([ "johnny","john", "jackie", "johnny", "john", "jackie", "jamie", "jamie", "john", "johnny", "jamie", "johnny", "john"])
console.log(ans1);

console.log(winner([ "blake", "clark", "andy"]));
 
