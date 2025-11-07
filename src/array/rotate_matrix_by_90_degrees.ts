function rotate_matrix_by_90_degrees(array:number[][]) {
    const n = array.length
    const m = array[0].length
    for (let i = 0; i < n-1; i++) {
        for (let j =  i + 1; j <= n-1; j++) {
           [array[i][j], array[j][i]] = [array[j][i], array[i][j]]
        }
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].reverse()
    }
    return array
}
console.log(rotate_matrix_by_90_degrees([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12], 
    [13,14,15,16]
]));
//7
