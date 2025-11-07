function set_matrix_zeroes(array: number[][]) {
    let n = array.length
    let m = array[1].length
    let col0 = 1
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if(array[i][0] === 0) col0 = 0
            else if(array[i][j] === 0) {
                //we use these as the row and column arrays
                //the problem we face here is array[0][0] will it refer to the row or column?
                //also if it refers to the row where will we store the column tracker?
                //we just use a extra variable for it
                array[0][j] = 0
                array[i][0] = 0

            }
        }
    }
    //here the issue is that we cant start from 0 cause thatll cause us to start changing our tracker array which might influence other trackers, like if we set arr[0][0] to 0 then that'll cause arr[0][3] to become zero cause its dependent on column 3 and row 0 and none of them contain original 0's so youll fall to the changed 0 trap too but if you look at the maxtrix you'll see that it should have remained a 1
    //but then how we change first row and column? its done separately
    for (let i = 1; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            //since we have used the first row and column to track we check for each element like for 2,3 we check whether 0,3 or 2,0 are 0 if they are we change this too to 0
            //we also have to track the edge case of col0, like if j = 0 we do not check 0,0 but col0
            //if()
            if(array[0][j] === 0 || array[i][0] === 0) {
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
    [0,1,1,1]
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