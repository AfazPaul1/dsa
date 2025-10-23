function move_zeroes_to_end(arr:number[]) {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            temp.push(arr[i])
        }
    }
    for (let j = 0; j < arr.length; j++) {
        arr[j] = temp[j]
    }
    for (let k = temp.length; k < arr.length; k++) {
        arr[k] = 0
    }
    return arr
}
console.log(move_zeroes_to_end([7, 0, 4, 5, 0, 6, 1, 2, 2]));
