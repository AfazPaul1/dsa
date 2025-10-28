function sort_an_array_of_0s_1s_and_2s(arr) {
    let count0 = 0
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) count0++
        else if(arr[i] === 1) count1++
        else count2++
    }
    for (let j = 0; j < count0; j++) {
        arr[j] = 0
    }
    for (let k = count0; k < count1+count0; k++) {
        arr[k] = 1
    }
    for (let l = count1+count0; l < arr.length; l++) {
        arr[l] = 2
        
    }
    return arr
}
console.log(sort_an_array_of_0s_1s_and_2s([2,0,2,1,1,0]));


