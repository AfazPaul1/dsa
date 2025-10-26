function get_single_element(arr) {
    let flag =0
    for (let i = 0; i < arr.length; i++) {
        flag = 0
        for (let j = 0; j < arr.length; j++) {
            if(i === j) continue            
            if (arr[i] === arr[j]) {
                flag = 1
                break
            }  
        }
        if (flag===0) {
            return arr[i]
        }
    }
}
console.log(get_single_element([1,7, 2,3, 1,2, 4, 3,7 ]));
