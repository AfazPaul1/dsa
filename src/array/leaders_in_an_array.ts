function leaders_in_an_array(array) {
    const res = []
    let max = 0
    for (let i = array.length-1; i> 0; i--) {
        if(array[i] > max) {
            res.push(array[i])
        }
        max = Math.max(array[i], max)
    }
    return res
}
console.log(leaders_in_an_array([10,22,12,3,0,6]));
