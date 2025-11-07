function set_matrix_zeroes(array: number[][]) {
    let infoRow = new Set()
    let infoCol = new Set()
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                infoRow.add(i)
                infoCol.add(j)
            }
        }
    }
    console.log(infoCol, infoRow);
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (infoRow.has(i)) {
                array[i][j] = 0
            } 
            if(infoCol.has(j)) {
                array[i][j] = 0
            }   
        } 
    }
    return array
}
console.log(set_matrix_zeroes([
    [1,1,1,1],
    [1,0,1,1],
    [1,1,0,1],
    [1,0,0,1]
]));
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
console.log(set_matrix_zeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]));
//[ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]