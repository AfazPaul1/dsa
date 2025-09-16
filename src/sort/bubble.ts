function bubble(arr:number[]) {
    for (let i = arr.length-1; i > 0; i--) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
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

