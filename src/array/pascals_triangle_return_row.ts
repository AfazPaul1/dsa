import pascals_triangle_find_value_at_pos from "./pascals_triangle_find_value_at_pos";

function pascals_triangle_return_row(row) {
    let rowItems = [1]
    let res = 1
    for (let i = 1; i < row; i++) {
        res*=row-i
        res/=i
        rowItems.push(res)
    }
    return rowItems
}
console.log(pascals_triangle_return_row(6)); //[ 1, 5, 10, 10, 5, 1 ]
console.log(pascals_triangle_return_row(8));