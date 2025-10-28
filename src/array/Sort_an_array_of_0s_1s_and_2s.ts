function sort_an_array_of_0s_1s_and_2s(arr) {
    return mergeSort(arr, 0, arr.length-1)
}
console.log(sort_an_array_of_0s_1s_and_2s([2,0,2,1,1,0]));

function mergeSort(arr, start, end) {
    if(start ===  end) {
        return
    }
    let mid = Math.floor((start+end)/2)
    mergeSort(arr, start, mid)
    mergeSort(arr, mid+1, end)
    merge(arr, start, mid, end)
    return arr
}
function merge(arr, start, mid, end) {
    let left = start
    let right = mid+1
    let temp = []
    while(right <= end && left <= mid ) { //0,2,2  0,1,1
        if(arr[left] < arr[right]) {
            temp.push(arr[left])
            left++;
        } else {
            temp.push(arr[right])
            right++;
        }
    }
    while(right <=end) {
        temp.push(arr[right]);
        right++
    }
    while(left <=mid) {
        temp.push(arr[left])
        left++
    }
    for (let i = 0; i < temp.length; i++) {
        arr[start] = temp[i]
        start++
    }
    return arr
}
