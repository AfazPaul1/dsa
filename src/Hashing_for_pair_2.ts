//this is duplicate proof 
//ie suppose a arr has only one 4 and the sum is 8 only if 4 occurs 2 times should 4 be considere a pair
//the hash ensures that
//and not count the 4 two times
function sumExists(arr: number[], sum:number) {
    const hashArr = new Set()
    for (const ele of arr) {
        if (hashArr.has(sum-ele)) {
            console.log("pair found", ele, " ", sum-ele);
        } else {
            hashArr.add(ele)
        }
    }
}
//const ans = sumExists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14)
//console.log(ans);
const largeArray1: number[] = [];
for (let i = 0; i < 100000; i++) { // A moderately large array for testing
    largeArray1.push(Math.floor(Math.random() * 200000) + 1); // Random numbers
}
// Add some consecutive sequences to ensure interesting test data
largeArray1.push(1, 2, 3, 4, 5);
largeArray1.push(1000000, 1000001, 1000002, 1000003);
console.log(largeArray1);

console.time("minSubsets execution time"); // Start the timer
//sumExists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14)
sumExists(largeArray1, 124403)
console.timeEnd("minSubsets execution time");


