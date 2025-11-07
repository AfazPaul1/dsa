function set_matrix_zeroes(array: number[][]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                array[i].map(ele => ele = 0)
            }
        }
    }
}
console.log(set_matrix_zeroes([
    [1,1,1],
    [1,0,1],
    [1,1,1]
]));
