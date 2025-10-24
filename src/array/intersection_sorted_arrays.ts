//WE ARE SEEING INTERSECTION SO IF 4 OCCURS 2 TIMES IN BOTH THEN IN THE OUTPUT 4 WILL BETHERE 2 TIMES
function intersection_sorted_arrays(a, b) {
    const visited = Array(b.length).fill(-1)
    const intersection = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i] === b[j] && visited[j] === -1) {
                intersection.push(a[i])
                visited[j]=1
                break
            }
        }
    }
    return intersection
}
console.log(intersection_sorted_arrays([1,2,3,4,4,6,6,6,7,8,9], [2,3,4,4,5,24]));
//[ 2, 3, 4, 4 ]