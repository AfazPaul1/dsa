//approach 2
//using no extra data structure (the map)
function all_permutation_2(array, idx, ans) {
    if(idx === array.length) {
        ans.push([...array])
        return
    }
    for (let i = idx; i < array.length; i++) {
        [array[idx], array[i]] = [array[i], array[idx]]
        all_permutation_2(array, i+1, ans)
    }
}
const res1:number[][] = []
console.log(all_permutation_2([1,2,3], 0, res1));//[ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 3, 1, 2 ], [ 2, 1, 3 ] ]
console.log(res1);


