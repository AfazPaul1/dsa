function sumExists(arr: number[], sum:number) {
    const hashArr = new Set(arr)
    for (const ele of arr) {
        if (hashArr.has(sum-ele)) {
            console.log("pair found", ele, " ", sum-ele);
            hashArr.delete(ele)  
            hashArr.delete(sum-ele)
        }
    }
}
//const ans = sumExists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14)
//console.log(ans);
console.time("minSubsets execution time"); // Start the timer
sumExists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14)
console.timeEnd("minSubsets execution time");


