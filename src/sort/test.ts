function insertion(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
        let j = i
        while ( j > 0 && arr[j-1] > arr[j]) {
            console.log(arr[j-1], arr[j]);
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            j-- //mistakenly did j++
            console.log(arr);
            
        }
    }
    return arr
}
console.log(insertion([10,54,3, 9,4, 65, 32]));
