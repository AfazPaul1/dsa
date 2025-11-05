export default function all_permutations(array:number[], ds:number[], map: boolean[], res:number[][]) {
    if(ds.length === array.length ) {
        res.push([...ds])
        return
    }
    for (let i = 0; i < array. length; i++) {
        if(!map[i]) {
            ds.push(array[i])
            map[i] = true
            all_permutations(array, ds, map, res)
            ds.pop()
            map[i] = false
        }
    }
}
const ans: number[][] = []
all_permutations([1,2,3], [], [false, false, false], ans)
//console.log(ans);

