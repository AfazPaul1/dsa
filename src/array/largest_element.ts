import { readFileSync } from 'fs';
function largest_element(arr){
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max) max =  arr[i]
    }
    return max
}
const data = readFileSync('large_array1000.json', 'utf8');
const largeArray = JSON.parse(data);
console.time("minSubsets execution time"); 
console.log(largest_element(largeArray));
console.timeEnd("minSubsets execution time");
//minSubsets execution time: 5.168ms
//execution time was 120ms with the insertions sort on the same array
//console.log(largest_element([3,2,1,5,2]));
//console.log(largest_element([14, 9, 15, 12, 6, 8, 13]));




