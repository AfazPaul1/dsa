function rearrange_elements_by_sign(array) {
    let posI = 0
    let negI = 1
    let res = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            res[posI] = array[i]
            posI+=2
        } else {
            res[negI] = array[i]
            negI+=2
        }
        
    }
    return res
}
console.log(rearrange_elements_by_sign([3,1,-2,-5,2,-4]));//[ 3, -2, 1, -5, 2, -4 ]
