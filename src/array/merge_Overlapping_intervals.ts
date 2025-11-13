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
    let res:number[][] = []
    for (let i = 0; i < array.length; i++) {  
        if(res.length === 0 || array[i][0] > res[res.length-1][1]) {
            res.push(array[i])
        } else {
            res[res.length-1][1] = Math.max(res[res.length-1][1], array[i][1])
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
//[ [ 1, 6 ], [ 8, 11 ], [ 15, 18 ] ]
