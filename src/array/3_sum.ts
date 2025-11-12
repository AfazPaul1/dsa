function three_sum(array) {
    let seen = new Set()
    let triplets = []
    array.sort((a,b) => a-b)
    for (let i = 0; i < array.length; i++) {
        let j = i+1
        let k = array.length-1
        while(j<k) {
            if(array[i] + array[j] + array[k] < 0) {
                j = incrJ(array, j)
            } else if(array[i] + array[j] + array[k] > 0) {
                k = decrK(array, k)
            }
            else  {
                let triplet = [array[i], array[j] , array[k]]
                let tripletStr = triplet.join(",")
                if(!seen.has(tripletStr)) {
                    seen.add(tripletStr)
                    triplets.push(triplet)
                }
                //triplets.push([array[i], array[j] , array[k]]) cant do this anymore to ensure no duplicates
                //forgot to do this causing an infinite loop where sum remained 0
                //j++
                //k--
                //cant  do that that might just give the same elements hence same sum we need to incr/decr till unique
                j = incrJ(array, j)
                k = decrK(array, k)
            }
        }
        
    }
    return triplets
}
function incrJ(array, j) {
    let jVal = array[j]
    while(array[j] === jVal ) {
        j++
    }
    return j
}
function decrK(array, k) {
    let kVal = array[k]
    while(array[k] === kVal ) {
        k--
    }
    return k
}
console.log(three_sum([-1,0,1,2,-1,-4])); 
console.log(three_sum([-1,0,1,0])); //[ [ -1, -0, 1 ] ] in the exampole tho it shows duplicates like  [-1,1,0]  in the ans
console.log(three_sum([-2, -2, -2, -1, -1, -1, 0, 0, 0, 2, 2, 2, 2]));
// ok since sum is less than k i need to keep incremeenting j till i get a value that is not equal to the j in the sum we calculated
// but how do i do this?
//i could store current j in a new variable and use it for the while condition
// also need to extract it into a function so it could be reused
// this approach works for all 3 arrays
//[ [ -2, 0, 2 ], [ -1, -1, 2 ], [ 0, 0, 0 ] ]
//below is what i get without using seen
//[
//   [ -2, 0, 2 ],
//   [ -2, 0, 2 ],
//   [ -2, 0, 2 ],
//   [ -1, -1, 2 ],
//   [ -1, -1, 2 ],
//   [ 0, 0, 0 ]
// ]