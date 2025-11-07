function set_matrix_zeroes(array: number[][]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                for (let l = 0; l < array[i].length; l++) {
                    if(array[i][l] !== 0) array[i][l] = -1
                }
                for (let k = 0; k < array.length; k++) {
                    if(array[k][j] !== 0) array[k][j] = -1
                }
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === -1) {
                array[i][j] = 0
            }   
        } 
    }
    return array
}
console.log(set_matrix_zeroes([
    [1,1,1],
    [1,0,1],
    [1,1,1]
]));
//[ 
//[ 1, 0, 1 ], 
//[ 0, 0, 0 ], 
//[ 1, 0, 1 ] 
//]
