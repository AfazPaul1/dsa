function pascals_triangle_find_value_at_pos(n, m) {
    let res = 1
    for (let i = 0; i < m; i++) {
        res*=n-i
        //res/=m-i //something about divisibility hard here
        res/=i+1

    }
    return res
}
console.log(pascals_triangle_find_value_at_pos(7, 2));
