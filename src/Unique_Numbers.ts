function uniqueNumbers(L:number, R:number){
    let cur = L
    const list = []
    while ( cur <=R ) {
       let some = cur.toString().split("")
       //map was not necessary for just a  uniqueness check we only needed to know whether a digit has occured before
       if((new Set(some)).size === some.length) list.push(cur)
       cur++
    }
    return list
}
console.log(uniqueNumbers(100, 120));
