function countFreq(arr: number[]){
    const result: number[][] = []
    const hashTable = new Map()
    for (const element of arr) {
        hashTable.set(element, (hashTable.get(element) || 0) + 1)
    }
    for (const [key, value] of hashTable) {
        result.push([key, value])
    }
    return result    
} 
console.log(countFreq([1, 2, 2, 3, 3, 5]));
