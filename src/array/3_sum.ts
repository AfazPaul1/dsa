function three_sum(array) {
    let seen = new Set()
    let triplets = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            for (let k = j+1; k < array.length; k++) {
                if(array[i] + array[j] + array[k] === 0) {
                    let triplet = [array[i], array[j], array[k]].sort((a,b) => a-b)
                    let tripletStr = triplet.join(',')
                    if(!seen.has(tripletStr)) {
                        seen.add(tripletStr)
                        triplets.push(triplet)
                    }
                    
                }
            }
        }
    }
    return triplets
}
console.log(three_sum([-1,0,1,2,-1,-4]));
