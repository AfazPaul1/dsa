function separateChaining(hashSize: number, arr: number[]) {
    const hashFunction = (key:number) => {
        const hashNum = key%hashSize
        return hashNum
    }
    //idk
    //********** */
    //first attemp
    // interface innerArr {
    //     [index:number] : number
    // }
    //const hash: innerArr[] = []
    //is there a better way to type this
    //********** */

    //ig yes
    const hash:number[][] = []

    for (let i = 0; i < arr.length; i++) {
        const hashNum = hashFunction(arr[i])        
        if (!hash[hashNum]) {
            hash[hashNum] = [arr[i]]
        } else {
            hash[hashNum].push(arr[i]) //.push doesnt exist in first attemp
        }
    }
    return hash
}

console.log(separateChaining(4, [6, 4, 10, 13, 5]));
console.log(separateChaining(5, [92,4,14,24,44,91]));
//currently this works locally but the gfg node instance gives some error about TypeError: Cannot read properties of undefined (reading 'length')
//this maybe cause its unable to print empty slots in the hash?
//i have confirmed this to be true
//when i have hashSize as 1 it compiles
//ok the errors were 2
//one when i am interating over this arr it results in empty null spots
//removed that in js by modifying the if to insert only a empty aarr not possible in ts
//ok  dont think it was relevant nor 2 errors only 1
// so what solved it was filling a new array with empty array at all spots 
//this ensured no null values