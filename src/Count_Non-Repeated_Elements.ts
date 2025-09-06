
function Count_NonRepeated_Elements(arr: number[]){
    const hash = new Map()
    for (const element of arr) {
        hash.set(element, (hash.get(element) || 0) + 1)
    }
    let NonRepeatedCount = 0
     
    const checkCount = (value: number) => {
        if(value === 1) NonRepeatedCount+=1
    }
    //i think for each is the slightly better option here? maybe for its functional style?
    //forof is better in cases where we have to break or return or async
    //none of that is here and we are performing a side effect
    //but in funcional programming fucntions are deterministic so its advised to avoid side effects? so this is bad? idk
    //this isnt much of an issue here cause we are not intending to reuse so its ok?
    hash.forEach(checkCount)

    return NonRepeatedCount
}

console.log(Count_NonRepeated_Elements([1, 1, 2, 2, 3, 3, 4, 5, 6, 7]))