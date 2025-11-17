function floor_ceil(array:number[], x:number) {
    return [floor(array, x), ceil(array, x)]
}
function floor(array:number[], x:number) {
    let low = 0 
    let high = array.length-1
    let floor = -1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] <= x) {
            floor = mid
            low = mid+1
        }  
        else {
            high = mid-1
        }
    }
    return array[floor]
}
function ceil(array:number[], x:number) {
    let low = 0 
    let high = array.length-1
    let ceil = -1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(array[mid] >= x) {
            ceil = mid
            high = mid-1
        }  
        else {
            low = mid+1
        }
    }
    return array[ceil]
}
console.log(floor_ceil([3, 4, 4, 7, 8, 10], 5));//[ 4, 7 ]
console.log(floor_ceil([1,2,2,3], 2));//[ 2, 3 ] correct [2,2] like i expected it is returning the upper bound and not the lower bound which is what we want
console.log(floor_ceil([3, 4, 4, 7, 8, 10], 8));//[ 8, 10 ] similarly it should have been [8,8] so how do i handle this in the same loop? maybe i cant i would have to do 2 separate things for the same equal to condition maybe i cant