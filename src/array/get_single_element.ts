function get_single_element(arr) {
    let count =0
    for (let i = 0; i < arr.length; i++) {
        count  = 0
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j])  {
                count++
            }
        }
        if (count === 1) {
            return arr[i]
        }
    }
}
console.log(get_single_element([1,7, 2,3, 1,2, 4, 3,7 ]));
