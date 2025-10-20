function largest_element(arr){
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max) max =  arr[i]
    }
    return max
}
console.log(largest_element([3,2,1,5,2]));
console.log(largest_element([14, 9, 15, 12, 6, 8, 13]));
  
