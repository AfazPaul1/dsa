function majority_element(arr:number[]) {
    let half = Math.floor(arr.length/2)
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++
            }
        }
        if(count > half) return arr[i] 
    }
}
console.log(majority_element([2,2,3,3,1,2,2]));
