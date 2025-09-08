// function findPairs(arr: number[], target: number): number[][] {
//   const hashTable = new Map<number, number[]>();
//   const result: number[][] = [];

//   for (let j = 0; j < arr.length; j++) {
//     const complement = target - arr[j];
//     console.log(hashTable);
    
//     // if complement exists, form pairs
//     if (hashTable.has(complement)) {
//       for (const i of hashTable.get(complement)!) {
//         result.push([i, j]);
//       }
//     }

//     // add current index to hashTable
//     if (!hashTable.has(arr[j])) {
//       hashTable.set(arr[j], []);
//     }
//     hashTable.get(arr[j])!.push(j);
//   }
//   console.log(hashTable);
  
//   return result;
// }
// console.log(findPairs([10, 20, 30, 20, 10, 30], 50));
import { readFileSync } from 'fs';
function findAllPairs(arr: number[], target:number) {
    let n = arr.length;
    let res = [];
  
    // Two nested loops to generate all pairs
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          
            // If sum of pair equals target, add it to result
            if (arr[i] + arr[j] === target) {
                res.push([i, j]);
            }
        }
    }
    return res;
}
// JavaScript Code to find all pairs using hashing

// function to find all pairs
// function findAllPairs(arr:number[], target:number) {
//     const n = arr.length;
//     const res = [];

//     const mp =  new Map();

//     for (let i = 0; i < n; i++) {

//         // Check if there exists an element that can pair with arr[i]
//         if (mp.has(target - arr[i])) {
          
//             // If such an element exists, iterate through its indices
//             for (const idx of mp.get(target - arr[i])) {
//                 res.push([idx, i]);
//             }
//         }
      
//         // Store the index of the current element in the map
//         if (!mp.has(arr[i])) {
//             mp.set(arr[i], []);
//         }
//         mp.get(arr[i]).push(i);
//     }
//     return res;
// }

//const arr = [10, 20, 30, 20, 10, 30];
const data = readFileSync('large_array1000.json', 'utf8');
const target = 150;
const largeArray = JSON.parse(data);
console.time("minSubsets execution time"); // Start the timer
const res = findAllPairs(largeArray, target);
console.timeEnd("minSubsets execution time");
console.log(res);