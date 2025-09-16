function bubble(arr:number[]) {
    for (let i = arr.length-1; i > 0; i--) {
        let isSwapped = 0
        console.log(isSwapped);
        
        for (let j = 0; j < i; j++) {
            //console.log("i: ", i, " ",  "j: ", j, " j+1: ", arr[j+1]);            
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
                isSwapped = 1
            }
            //console.log(arr);    
        }    
        if (isSwapped === 0) {
            return arr
        }    
    }
    return arr
}
console.log(bubble([13, 46, 24, 52, 20, 9]));
//best case
console.log(bubble([ 9, 13, 20, 24, 46, 52 ]));

