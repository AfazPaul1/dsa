function rearrange_elements_by_sign_no_equality(array) {
    let positives = []
    let negatives = []
    for (let j = 0; j < array.length; j++) {
        if(array[j] > 0) positives.push(array[j])
        else negatives.push(array[j])
        
    }
    let min = Math.min(positives.length, negatives.length)
    for (let i = 0; i < min; i++) { //my initial brute force in another file was 2n while it could have been n/2 where we could have inserted 2 elements at once instead of 1 element. here too in 2 passes we insert 4 elements
        array[i*2] = positives[i]
        array[i*2+1] = negatives[i]
    }
    let k = 2*min //gives the index where the next insertion should happen. like if theres 2 negatives (min) and 4 positives we would insert 2 negatives and 2 positives normally and then we would have to insert the rest at the position 2+2 which is 4
    if(positives.length > negatives.length) {
        while(min < positives.length) {
            array[k] = positives[min]
            min++
            k++
        }
    } else {
        while(min < negatives.length) {
            array[k] = negatives[min]
            min++
            k++
        }
    }
    return array
}
console.log(rearrange_elements_by_sign_no_equality([-1,2,3,4,-3,1]));
console.log(rearrange_elements_by_sign_no_equality([-1,2,3,-9,-3,-11]));//[ 2, -1, 3, -9, -3, -11 ]
console.log(rearrange_elements_by_sign_no_equality([-1,-2,-3,-9,-3,-11]));//[ -1, -2, -3, -9, -3, -11 ]

