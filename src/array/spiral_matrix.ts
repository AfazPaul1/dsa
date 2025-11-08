function spiral_matrix(array: number[][]) {
    let left = 0
    let right = 3
    let top = 0
    let bottom = 3
    for (let i = left; i < array.length; i++) {
        console.log(array[top][i]);
    }
    top++
    for (let i = top; i < array.length; i++) {
        console.log(array[i][right]);
    }
    right--
    for (let i = right; i >= left; i--) {
        console.log(array[bottom][i]);   
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
        console.log(array[i][left]);
    }
    left++;
    for (let i = left; i <= right; i++) {
        console.log(array[top][i]);
    }
    top++
    for (let i = top; i <= bottom; i++) {
         console.log(array[i][right]);        
    }
    right--
    for (let i = right; i >= left; i--) {
        console.log(array[bottom][i]); 
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
        console.log(array[i][left]);   
    }
    left++
}
console.log(spiral_matrix([
    [ 1, 2, 3, 4 ],
	[ 5, 6, 7, 8 ],
	[ 9, 10, 11, 12 ],
	[ 13, 14, 15, 16 ]
]));
