//this would not work for a 3 digit number
// function uniqueNumbers(L:number, R:number){
//     let cur = L
//     const list = []
//     while ( cur <=R ) {
//        let some = cur.toString().split("")
//        console.log(some);
       
//        if(some[0] !== some[1]){
//         list.push(cur)
        
//        }
//        cur++
//     }
//     return list
// }
// console.log(uniqueNumbers(10, 20));
function uniqueNumbers(L:number, R:number){
    let cur = L
    const list = []
    while ( cur <=R ) {
       let some = cur.toString().split("")
       console.log(some);
       
       const ite = new Map()
        for (const ele of some) {
            ite.set(ele, (ite.get(ele) || 0) + 1)
        }
            
        if (some.length === [...(ite.keys())].length) {
            list.push(cur)
        }
       
       cur++
    }
    return list
}
console.log(uniqueNumbers(100, 120));
