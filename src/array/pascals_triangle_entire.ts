import pascals_triangle_find_value_at_pos from "./pascals_triangle_find_value_at_pos";
function pascals_triangle_entire(rows) {
    const ans = []
    for (let i = 1; i <= rows; i++) {
        let rowItems = [1]
        let res = 1
        for (let j = 1; j < i; j++) {
            res*=i-j //row-col
            res/=j
            rowItems.push(res)
        }
        ans.push(rowItems)
        
    }
    return ans
}
console.log(pascals_triangle_entire(6));
// [
//   [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ],
//   [ 1, 5, 10, 10, 5, 1 ]
// ]
