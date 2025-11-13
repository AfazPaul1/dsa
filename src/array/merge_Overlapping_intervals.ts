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
    //ok so how do i loop this
    //first when i start for 1st element and go through at some point when i doesnt overlap i break out and dont check anymore, i also dont start from the immediate next element but from where i left off cause they are already part of a sequence so no use starting from them again
    //how how do i loop this in a for every thing is looped but we dont want that maybe i could skip yes 
    let res = []
    for (let i = 0; i < array.length; i++) {  
        let first = array[i][0]
        let second = array[i][1]
        if(res.length && second <= res[res.length-1][1] ) continue
        if(!array[i+1]) {
            res.push([first, second])
            break
        }
        for (let j = i+1; j < array.length; j++) {
            if(second > array[j][0]) {
                second = array[j][1]
            } else {
                res.push([first, second])
                break
            }
        }
    }
    return res
    
}
console.log(merge_Overlapping_intervals([[8,10],[15,18], [1,3],[2,6],]));
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
//[ [ 1, 6 ], [ 8, 11 ], [ 16, 17 ] ] when it should have been [15,18] as the 3rd element and not [16,17]

