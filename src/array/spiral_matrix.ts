function spiral_matrix(array: number[][]) {
    let left = 0
    let right = array[0].length-1
    let top = 0
    let bottom = array.length-1
    while (top  <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
        console.log(array[top][i]);
        }
        top++
        for (let i = top; i <= bottom; i++) {
            console.log(array[i][right]);        
        }
        right--
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                console.log(array[bottom][i]); 
            }
            bottom--
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                console.log(array[i][left]);   
            }
        left++
        }
    }
    
}
// console.log(spiral_matrix([
//     [ 1, 2, 3, 4 ],
// 	[ 5, 6, 7, 8 ],
// 	[ 9, 10, 11, 12 ],
// 	[ 13, 14, 15, 16 ]
// ]));
// console.log(spiral_matrix([
//   [1, 2, 3, 4, 5, 6],
//   [20, 21, 22, 23, 24, 7],
//   [19, 32, 33, 34, 25, 8],
//   [18, 31, 36, 35, 26, 9],
//   [17, 30, 29, 28, 27, 10],
//   [16, 15, 14, 13, 12, 11],
// ]
// ));
console.log(spiral_matrix([[1,2,3,4,5,6]]));
console.log(spiral_matrix([
    [1],
    [2],
    [3],
    [4]
]));//1 2 3 4 3 2

