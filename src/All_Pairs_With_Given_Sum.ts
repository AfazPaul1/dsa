import { readFileSync } from 'fs';
function findAllPairs(arr: number[], target: number) {
    const hashTable = new Map()


    const result: number[][] = []
    //**********************************
    //incorrect approach
    //this would have resulted in a array with key value pairs which have a pair in the array
    //but this is not what we want
    // we want the keys of the pair
    //has returns a simple boolean it has no info on the key
    //ok another misunderstanding
    //has checks whether a particular key exists
    //not the value
    //so maybe if i swap the indix and the value it could work
    //if i hash.get(pair value) ill get the index of the pair now ill have 2 indices
    // for (let i = 0; i < arr.length; i++) {
    //     hashTable.set(i, arr[i] )
    // }
    // for (const [key, value] of hashTable) {
    //     if (hashTable.has(target - value)) {
    //         result.push([key, val])
    //     }
    // }
    //**********************************

    //**********************************
    //another incorrect approach
    //keys are meant to be unique
    //so i cant have 2 keys named 10 with 2 different values
    //it doesnt work that way 
    //so what was happening was {10, 0}  key value was being overrittens with a value of 4
    //same for all 3
    //so what i can do i have key 10 and a array of indices with that value 10
    //didnt come up with this on my own
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i], i);

    //     hashTable.set(arr[i], i )
    // }
    // for (const [key, value] of hashTable) {
    //     if (hashTable.has(target - key)) {
    //         result.push( [value, hashTable.get(target-key)] )
    //     }
    // }
    //Map(3) { 10 => [ 0, 4 ], 20 => [ 1, 3 ], 30 => [ 2, 5 ] }
    //**********************************

    //**********************************
    //3rd approach
    // for (let i = 0; i < arr.length; i++) {
    //     const mapArr = hashTable.get(arr[i])
    //     //console.log(mapArr);

    //     if (mapArr) {
    //         //incorrect way
    //         //the return value of mappArr.push(i) is not the new array but the length of the new array
    //         //so the key 10's value was being replaced by the length of array which is 2
    //         //so instead od it being 10 => [0,4] it was 10 => 2
    //         //realised it when i logged step by step and checked push's return
    //         //hashTable.set(arr[i], mapArr.push(i) )
    //         mapArr.push(i)
    //         hashTable.set(arr[i], mapArr)
    //     } else {
    //         hashTable.set(arr[i], [i])
    //     }
    //     //console.log(hashTable);

    // }


    
    // for (const [key, value] of hashTable) {
    //     if (hashTable.has(target - key)) {
    //           for (const ele of value) {
    //             for (const ele1 of hashTable.get(target - key)) {
    //                 if (ele < ele1) result.push([ele, ele1])
    //             }
    //         }
    //     }

    // }
    //before size check     [
    //   [ 1, 2 ], [ 1, 5 ],
    //   [ 3, 2 ], [ 3, 5 ],
    //   [ 2, 1 ], [ 2, 3 ],
    //   [ 5, 1 ], [ 5, 3 ]
    //     ]
    //after a check i canm avoid it
    //❌but not much imporovement over brute force
    //that was wrong campred same file
    //this is 43ms for a 150 target 10000 array
    //brute force was 80ms
    //this still fails the lexi order criteria
    //     Your Output:
    // 1 2
    // 1 5
    // 3 5
    // 2 3
    // Expected Output:
    // 1 2
    // 1 5
    // 2 3
    // 3 5
    //this happens because when ele value is 3 and ele1 value is 5 it pushes
    //looks like the method is ok and they are just sorting the array this gives
    //also there is another way to solve this see next commit
    //**********************************

    
    //finale
    //so this is 2 sum?    
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]
        if (hashTable.has(complement)) {
            for (const index of hashTable.get(complement)) {
                result.push([index, i])
            }
        }
        if(!hashTable.has(arr[i])) {
            hashTable.set(arr[i], [])
        }
        hashTable.get(arr[i]).push(i)
        //console.log(hashTable);
    }

    //result.sort((a, b) => a[0] - b[0])
    return result
}
// console.time("minSubsets execution time"); // Start the timer
 //console.log(findAllPairs([10, 20, 30, 20, 10, 30], 50));
 
// console.timeEnd("minSubsets execution time");
const data = readFileSync('large_array1000.json', 'utf8');
const target = 150;
const largeArray = JSON.parse(data);
console.time("minSubsets execution time"); // Start the timer
const res = findAllPairs(largeArray, target);
console.timeEnd("minSubsets execution time");
//console.log(res);
