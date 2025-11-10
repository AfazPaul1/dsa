import pascals_triangle_find_value_at_pos from "./pascals_triangle_find_value_at_pos";

function pascals_triangle_return_row(row) {
    let rowItems = []
    for (let i = 0; i < row; i++) {
        rowItems.push(pascals_triangle_find_value_at_pos(row-1,i))
    }
    return rowItems
}
console.log(pascals_triangle_return_row(6)); //[ 1, 5, 10, 10, 5, 1 ]
