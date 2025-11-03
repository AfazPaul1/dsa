function rearrange_elements_by_sign(array) {
    let positives = []
    let negatives  = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0) negatives.push(array[i])
        else positives.push(array[i])
    }
    let posI = 0
    let negI = 0
    for (let j = 0; j < array.length; j++) {
        if(j%2 === 0) {
            array[j] = positives[posI]
            posI++
        } else {
            array[j] = negatives[negI]
            negI++
        }
        
    }
    return array
    
}
console.log(rearrange_elements_by_sign([3,1,-2,-5,2,-4]));//[ 3, -2, 1, -5, 2, -4 ]
