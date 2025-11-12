function four_sum(array, target) {
    array.sort((a,b) => a-b)
    let quadruplets = []
    for (let i = 0; i < array.length; i++) {
    if  (i !== 0 && array[i] === array[i-1]) continue
        for (let j = i+1; j < array.length; j++) {
        //was wondering the condition here liek i+1 like if its the first element do do the comaprision and directly proceed
        if  (j !== i+1 && array[j] === array[j-1]) continue
            let k = j+1
            let l = array.length-1
            while(k < l) {
                let sum = array[i] + array[j] + array[k] + array[l]
                if(sum < target) {
                    k++
                }
                else if (sum > target) {
                    l--
                } 
                else {
                    quadruplets.push([array[i], array[j], array[k], array[l]])
                    k++
                    l--
                    while (k<l && array[k] === array[k-1]) k++
                    while (k<l && array[l] === array[l+1]) l--
                }
            }                  
        }      
    }
    return quadruplets
}
console.log(four_sum([1,0,-1,0,-2,2], 0));//[ [ -1, 0, 0, 1 ], [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ] ]
//console.log(four_sum([1,2,-1-2,2,0,-1], 0));
console.log(four_sum([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5], 8));
console.log(four_sum([4,3,3,4,4,2,1,2,1,1], 9));

