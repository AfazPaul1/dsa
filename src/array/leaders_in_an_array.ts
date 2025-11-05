function leaders_in_an_array(array) {
    const res = []
    let flag = true
    for (let i = 0; i < array.length; i++) {
        flag = true
        for (let j = i+1; j < array.length; j++) {
            if(array[j] > array[i]) {
                flag = false
                break
            }
        }
         if(flag === true) {
            res.push(array[i])
         }
    }
    return res
}
console.log(leaders_in_an_array([10,22,12,3,0,6]));
