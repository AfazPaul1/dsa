function rearrange_elements_by_sign(array) {
    let posI = 0
    let negI = 1
    let j = 0
    while (j<array.length){
        if(j%2 === 0 && array[j] < 0) {
            
            posI++
        } else if (j%2 === 1 && array[j] > 0) {
            
            negI++
        }
        
    }
    return array
}
console.log(rearrange_elements_by_sign([3,1,-2,-5,2,-4]));//[ 3, -2, 1, -5, 2, -4 ]
