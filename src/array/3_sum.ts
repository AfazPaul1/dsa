function three_sum(array) {
    let seen = new Set()
    let triplets = []
    for (let i = 0; i < array.length; i++) {
        let hashSet = new Set()
        for (let j = i+1; j < array.length; j++) {
             let k = -(array[i] + array[j])
             if(hashSet.has(k)) {
                let triplet = [array[i], array[j], k].sort((a,b) => a-b)
                let tripletStr = triplet.join(',')
                if(!seen.has(tripletStr)) {
                    seen.add(tripletStr)
                    triplets.push(triplet)
                }
             }
             hashSet.add(array[j])
        }
    }
    return triplets
}
console.log(three_sum([-1,0,1,2,-1,-4])); 
//[ [ -1, 0, 1 ], [ -1, -1, 2 ], [ -4, 2, 2 ], [ -4, -1, 5 ] ]
//initially got this
//the reason for last one was i was adding k to hash set
//the reason for 3rd is i wasnt resetting hashset
//finally [ [ -1, -0, 1 ], [ -1, -1, 2 ] ]
console.log(three_sum([-1,0,1,0])); //[ [ -1, -0, 1 ] ] in the exampole tho it shows duplicates like  [-1,1,0]  in the ans

