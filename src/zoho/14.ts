function findTopThreeRepeatedNumbers(arr) {
    // Step 1: Count Frequencies using a Map
    const frequencyMap = new Map();
    
    for (const number of arr) {
        // Increment the count for the current number
        frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
    }
    
    const frequencyArray = Array.from(frequencyMap.entries());

    frequencyArray.sort((a, b) => {
        // Sort by frequency (descending)
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }
    });

    // frequencyArray (Sorted Example): [ [3, 4], [15, 3], [16, 3], [2, 2], [4, 1] ] 
    // Note: The tie-break between 15 and 16 here is based on the optional sort by number.
    
    // 2.3 Select the top 3 and extract the numbers
    const topThreeNumbers = frequencyArray
        .slice(0, 3) // Take the first 3 elements (which have the highest frequency)
        .map(entry => entry[0]); // Extract the number (the key/index 0)

    return topThreeNumbers;
}

const inputArray = [3, 4, 2, 3, 16, 3, 15, 16, 15, 15, 16, 2, 3];
const result = findTopThreeRepeatedNumbers(inputArray);

console.log(result); // Output: [ 3, 15, 16 ] (or [ 3, 16, 15 ] depending on tie-breaking)