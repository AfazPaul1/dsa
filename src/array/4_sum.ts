function four_sum(array) {
    let seen = new Set()
    let quadruplets = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            for (let k = j+1; k < array.length; k++) {
                for (let l = k+1; l < array.length; l++) {
                    let sum = array[i] + array[j] + array[k] + array[l]
                    if(sum === 0) {
                        let quadruplet = [array[i] , array[j] , array[k] , array[l]].sort((a,b) => a-b)
                        let quadrupletStr = quadruplet.join(",") 
                        if(!seen.has(quadrupletStr)) {
                            seen.add(quadrupletStr)
                            quadruplets.push(quadruplet)
                        }
                    }
                }

            }
            
        }
        
    }
    return quadruplets
}
console.log(four_sum([1,0,-1,0,-2,2]));
