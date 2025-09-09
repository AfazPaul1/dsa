function intersect(a:number[], b:number[]) {
    //i could probably sort both arrays and then use 2 pointer to sole this
    //but sorting adds overhead
    //lets first try it
    const newa = new Set(a.sort((a,b) => a-b))
    const newb = new Set(b.sort((a,b) => a-b))
    console.log(newa.intersection(newb)); //only esnext not in es2023
    //console.log(newa,newb, odds);
    //const res = newa.intersection(newb)
    //didnt use a Set initially
    //i dont think this accessing with index works with set
    //probably would have to use a forof instead of a general index
    // for (let i = 0; i < newa.size; i++) {
    //     console.log("outer loop", i, newa[i]);
        
    //     for (let j = 0; j < b.length; j++) {
    //         console.log("inner loop", j, b[j]);
            
    //         if (a[i] === b[j]) {
    //             res.push(a[i])
    //             i++;
    //             j++
    //             break
    //         } else {
    //             j++
    //         }
    //     }
    // }
    return newa.intersection(newb)
}

console.log(intersect([1, 2, 1, 3, 1], [3, 1, 3, 4, 1]));
