function mostFrequestElement(){
    const arr: number[] =  [4, 4, 5, 5, 5, 6]
    const hash: Map<number, number> = new Map()
    for (const ele of arr) {
        hash.set(ele, (hash.get(ele) || 0) + 1)
    }
    let keyHigh = 0
    let valueHigh = 0

    for (const [key, value] of hash) {
        if (value > valueHigh || value === valueHigh && key < keyHigh) {
            keyHigh = key 
            valueHigh=value
        }
    }
    console.log(keyHigh, valueHigh);
    
}

mostFrequestElement()