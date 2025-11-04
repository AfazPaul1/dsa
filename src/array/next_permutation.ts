import all_permutations from '../recursion/all_permutations'
function next_permutation(array:number[]) {
    const res:number[][] = []
    all_permutations(array, [], [false, false, false], res)
    const idx = res.findIndex((arr) => arr.every((element, i) => element === array[i]))
    return res[idx+1]
}
console.log(next_permutation([1,2,3]));//[ 1, 3, 2 ]
//console.log(next_permutation([2,1,5,4,3,0,0]));
