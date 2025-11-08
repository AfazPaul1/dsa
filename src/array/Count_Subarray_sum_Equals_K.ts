function Count_Subarray_sum_Equals_K(array: number[], k:number) {
    
    let count = 0
    for (let i = 0; i < array.length; i++) {
        let sum = 0
        for (let j = i; j < array.length; j++) {
            sum+=array[j]
            //if(sum > k) break oh looks like i cant do this cause of negatives
            if(sum === k) count++ 
        }
    }
    return count
}
console.log(Count_Subarray_sum_Equals_K([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));
//it counts to 7 buts its wrong this happens because we are not counting the first element like suppose its a single first element 3 thats not being counted now cause we are addding to sum the next number without first checking
//but moving the sum check before the sum operation gives 6 lol
//ig me trying to start j from i+1 and initializing sum with the first element was issue
//i undid all those and it worked