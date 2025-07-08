function minSubsets(arr: number[]) {
    const arr1= new Set(arr)
    let final = []
    for (const ele of arr) {
        if(!arr1.has(ele - 1)) {
            let tempSubset = []
            //console.log(ele);
            let newEle = ele
            while(arr1.has(newEle)) {
                //console.log(ele);
                tempSubset.push(newEle)
                arr1.delete(newEle)
                newEle++
            }
            final.push(tempSubset)
        }
    }
    return final
}
// const sub1 = minSubsets([102, 56, 5, 6, 100, 58, 101, 57, 7, 103, 59])
// console.log(sub1);

//const hash = new Map()
    // for (const ele of arr) {
    //     hash.set(ele, [])
    // }
    //failure app doesnt work for when we start with 102
    // for (const ele of arr) {
    //     hash.set(ele, hash.has(ele -1)?  (hash.get(ele-1)).push(ele): hash.set(ele, [ele]) )
    // }
// Test case
const largeArray = [];
for (let i = 0; i < 100000; i++) { // A moderately large array for testing
    largeArray.push(Math.floor(Math.random() * 200000) + 1); // Random numbers
}
// Add some consecutive sequences to ensure interesting test data
largeArray.push(1, 2, 3, 4, 5);
largeArray.push(1000000, 1000001, 1000002, 1000003);


console.time("minSubsets execution time"); // Start the timer
const result = minSubsets(largeArray);
console.timeEnd("minSubsets execution time"); // End the timer and print the duration
// console.log(result); // You might want to comment this out for very large results

