function longest_subarray_with_sum_k(arr, k) {
    
    let longest_length = 0
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i; j < arr.length; j++) {
            let newArr = arr.slice(i,j+1)
            let sum=newArr.reduce((acc, cur) => acc+cur)
            let count=newArr.length
            if(sum===k) {
                console.log(newArr);
                longest_length=Math.max(count, longest_length)
            }
              
        }
    }
    return longest_length
}
console.log(longest_subarray_with_sum_k([2,3,5,1,9], 10));
