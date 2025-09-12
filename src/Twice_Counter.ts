 function countWords(list: string[], n: number) {
    const hash = new Map<string, number>()
    for (const ele of list) {
        hash.set(ele, (hash.get(ele) || 0)   + 1)
        //+ has higher precedence than || so alwys ensure the brackets    
    }
    let exactlyTwiceCount = 0
    for (const [key, value] of hash) {
        if (value === 2) {
            exactlyTwiceCount+=1
        }
    }
    return exactlyTwiceCount       
 }
 console.log(countWords(["Geeks", "For", "Geeks"], 3));
 console.log(countWords(["Tom", "Jerry", "Thomas", "Tom", "Jerry", "Courage", "Tom", "Courage"], 8));
