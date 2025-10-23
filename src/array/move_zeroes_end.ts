function move_zeroes_to_end(arr:number[]) {
    let j = -1 
    //using a loop to find the first instance where 0 occurs
    //that was what was confusing me
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!==0) {
            [arr[j], arr[i]]=[arr[i], arr[j]]
            j=i
        }
    }
}
console.log(move_zeroes_to_end([7, 0, 4, 5, 0, 6, 1, 2, 2]));
