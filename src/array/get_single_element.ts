function get_single_element(arr) {
    let xor1 = 0
    for (let i = 0; i < arr.length; i++) {
        xor1 = xor1 ^ arr[i]
    }
    return xor1
}
console.log(get_single_element([1, 7, 2, 3, 1, 2, 4, 3, 7 ]));
//4