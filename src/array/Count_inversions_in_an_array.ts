function Count_inversions_in_an_array(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[i]) {
                count++
            }
        }
    }
    return count
}
console.log(Count_inversions_in_an_array([5,4,3,2,1]));
console.log(Count_inversions_in_an_array([5,3,2,1,4]));
