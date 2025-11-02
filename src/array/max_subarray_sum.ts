function max_subarray_sum(array) {
    let max= 0
    let sum = 0
    let tempStart = 0
    let startI = 0
    let endI = 0
    let subarray:number[][] = []
     for (let i = 0; i < array.length; i++) {
        if(sum === 0)  tempStart = i
        sum += array[i]
        if(sum > max ) {
            max = sum
            startI = tempStart
            endI = i
            subarray = [[startI, endI]]
        } else if (sum === max) {
            startI = tempStart
            endI = i
            subarray.push([startI, endI])
        }
        if(sum < 0) sum = 0
     }
    let result = subarray.map(([startI, endI]) => array.slice(startI, endI+1))
    return [result, max]
}
//console.log(max_subarray_sum([-2,-2,4,-1,-2,1,5,-3])); //[ [ 4, -1, -2, 1, 5 ], 7 ]
console.log(max_subarray_sum([-2,-2,4,-1,-2,1,5,-3, -5, -2,4,-1,-2,1,5,])); //[ [], 7 ]
//the reason this wasnt working was at the end start index was 10, and endindex was 6 cause the max never exceeded earlier max but the sum became 0 hence the start index was changed and endindex never changed

