function insertion(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let j = i
        while (j > 0 && arr[j-1] > arr[j]) {
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            j--;
            console.log(arr);   
        }
        
    }
    return arr
}
//console.log(insertion([14, 9, 15, 12, 6, 8, 13]));
//i = 3
//j = 3
//9 14 12 15
//j = 2
//9 12 14 15
console.log(insertion([6,  8,  9, 12, 13, 14, 15])); //best case while never runs O(n)

