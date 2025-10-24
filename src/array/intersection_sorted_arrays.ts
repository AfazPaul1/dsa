//WE ARE SEEING INTERSECTION SO IF 4 OCCURS 2 TIMES IN BOTH THEN IN THE OUTPUT 4 WILL BETHERE 2 TIMES
function intersection_sorted_arrays(a, b) {
    const visited = Array(b.length).fill(-1)
    const intersection:number[] = []
    let i = 0
    let j = 0
    let n = a.length
    let m = b.length
    while(i<n && j<m) {
        if(a[i] < b[j]) i++
        else if(b[j] < a[i]) j++
        else {
            intersection.push(b[j])
            j++
            i++
        }
    }
    return intersection
}
console.log(intersection_sorted_arrays([1,2,3,4,4,6,6,6,7,8,9], [2,3,4,4,5,24]));
//[ 2, 3, 4, 4 ]
console.log(intersection_sorted_arrays([1,2,6,6,6,7,8,9], 
    [2,3,4,4,5,6,9]));
//[ 2, 6, 9 ]
 console.log(intersection_sorted_arrays([1,2,3,6,6,6,7,8,9], 
    [2,9]));
