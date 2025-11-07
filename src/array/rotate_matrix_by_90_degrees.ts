function rotate_matrix_by_90_degrees(array) {
    const n = array.length
    const m = array[0].length
    const res = new Array(n).fill(null).map(ele => Array(m).fill(-1))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[j][m-1-i] = array[i][j]
        }
    }
    return res
}
console.log(rotate_matrix_by_90_degrees([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12], 
    [13,14,15,16]
]));
//7
