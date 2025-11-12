function four_sum(array) {
    let seen = new Set()
    let quadruplets = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            let hashSet = new Set()
            for (let k = j+1; k < array.length; k++) {
                let l = -(array[i] + array[j] + array[k])
                if(hashSet.has(l)) {
                    let quadruplet = [array[i] , array[j] , array[k] , l].sort((a,b) => a-b)
                    let quadrupletStr = quadruplet.join(",") 
                    if(!seen.has(quadrupletStr)) {
                        seen.add(quadrupletStr)
                        quadruplets.push(quadruplet)
                    }
                }
                //everything from j to k will be in the hashset
                //why not the entire array?
                //because all values should be distinct same values cant repeat and if we include the entire array that'll happen
                hashSet.add(array[k])
            }          
        }   
    }
    return quadruplets
}
console.log(four_sum([1,0,-1,0,-2,2]));//[ [ -1, 0, 0, 1 ], [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ] ]
console.log(four_sum([1,2,-1-2,2,0,-1]));
