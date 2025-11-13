function merge_Overlapping_intervals(array) {
    array.sort((a, b) => {
        let len = Math.min(a.length, b.length)
        for (let i = 0; i < len; i++) {
            if(a[i] !== b[i]) {
                return a[i] - b[i]
            }   
        }
        return a.length-b.length
    }
    )
    let res = []
    for (let i = 0; i < array.length; i++) {  
        let first = array[i][0]
        let second = array[i][1]
        if(res.length && second <= res[res.length-1][1] ) continue
        // if(!array[i+1]) {
        //     res.push([first, second])
        //     break
        // } //can remove this now 
        for (let j = i+1; j < array.length; j++) {
            if(second >= array[j][0]) {
                second = Math.max(array[j][1], second)
                //max cause when its [15,18] & [16,17] we cant have our ebtry be [15,17] when it should be [15,18]
            } else {
                //res.push([first, second]) //[ [ 1, 6 ], [ 8, 11 ], [ 16, 17 ] ]
                //having it here results in this array which is wrongs the numbers are in range 15-18
                //when i is at 6 and j is at 7 theres no next element
                //hence j cant be 8 and exits the loop
                //our updated second value was 18 and first was 15
                //but it never got inserted cause j became 8 and else never executed
                //to handle this i had a special insertion in i loop but that created a new first and second and inserted it which are not values we have validated nor updated which resulted in 16,17 inserted 
                //that is why we need our push after the j for loop
                //though which we can avoid the need for the special inserion
                break
            }
        }
        res.push([first, second])
    }
    return res
    
}
//console.log(merge_Overlapping_intervals([[8,10],[15,18], [1,3],[2,6],]));
//[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(merge_Overlapping_intervals([
  [1, 3],
  [2, 6],
  [8, 9],
  [9, 11],
  [8, 10],
  [2, 4],
  [15, 18],
  [16, 17]
]));
//[ [ 1, 6 ], [ 8, 11 ], [ 15, 18 ] ]
