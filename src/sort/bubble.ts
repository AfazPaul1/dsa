function bubble(arr:number[]) {
    for (let i = arr.length-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log("i: ", i, " ",  "j: ", j, " j+1: ", arr[j+1]);            
            if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
            console.log(arr);
            
        }        
    }
    return arr
}
console.log(bubble([13, 46, 24, 52, 20, 9]));
// j = 0, j < 5
//j =   1
//13 24 46 52 20 9
//j = 2
//nothing
//j = 3
// 20 52
//j  = 4
//9 52 
//after 1st iteration
//13 24 46 20 9 52
//now last ele is sorted
// λ npx tsx bubble.ts 
// 1:  5   j:  0  j+1:  46
// 1:  5   j:  1  j+1:  24
// 1:  5   j:  2  j+1:  52
// 1:  5   j:  3  j+1:  20
// 1:  5   j:  4  j+1:  9
// 1:  5   j:  5  j+1:  undefined
// 1:  4   j:  0  j+1:  24
// 1:  4   j:  1  j+1:  46
// 1:  4   j:  2  j+1:  20
// 1:  4   j:  3  j+1:  9
// 1:  4   j:  4  j+1:  52
// 1:  4   j:  5  j+1:  undefined
// 1:  3   j:  0  j+1:  24
// 1:  3   j:  1  j+1:  20
// 1:  3   j:  2  j+1:  9
// 1:  3   j:  3  j+1:  46
// 1:  3   j:  4  j+1:  52
// 1:  3   j:  5  j+1:  undefined
// 1:  2   j:  0  j+1:  20
// 1:  2   j:  1  j+1:  9
// 1:  2   j:  2  j+1:  24
// 1:  2   j:  3  j+1:  46
// 1:  2   j:  4  j+1:  52
// 1:  2   j:  5  j+1:  undefined
// 1:  1   j:  0  j+1:  9
// 1:  1   j:  1  j+1:  20
// 1:  1   j:  2  j+1:  24
// 1:  1   j:  3  j+1:  46
// 1:  1   j:  4  j+1:  52
// 1:  1   j:  5  j+1:  undefined
// [ 9, 13, 20, 24, 46, 52 ]
