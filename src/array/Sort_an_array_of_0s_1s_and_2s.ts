//dutch national flag
function sort_an_array_of_0s_1s_and_2s(arr) {
    let low = 0
    let mid = 0
    let high = arr.length-1
    while(mid<=high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
              low++
            mid++
        } else if(arr[mid] === 1)  {
            mid++
        }else if(arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--
        }
    }
    return arr
     
}
console.log(sort_an_array_of_0s_1s_and_2s([0,1,1,0,1,2,1,2,0,0,0]));
//console.log(sort_an_array_of_0s_1s_and_2s([2,0,2,1,1,0]));