function mostFrequestElement(){
    const arr: number[] =  [4, 4, 5, 5, 6]
    const hash: Map<number, number> = new Map()
    for (const ele of arr) {
        hash.set(ele, (hash.get(ele) || 0) + 1)
    }
    const highEle: Record<string, number> = {
        "keyHigh":0,
        "valueHigh":0
    }
    for (const [key, value] of hash) {
        if (value === highEle.valueHigh && key < highEle.keyHigh) {
            highEle.keyHigh = key 
            highEle.valueHigh=value
        } else if (value > highEle.valueHigh){
            highEle.keyHigh = key 
            highEle.valueHigh=value
        }
    }
    console.log(highEle);
    
}

mostFrequestElement()