function missing_and_repeating_number(array ) {
    let k = array.length
    let s = (k*(k+1))/2
    let sq = ((k)*(k+1)*((2*k)+1))/6
    // let sn = array.reduce((acc, cur) => acc+cur)
    // let sqn = array.reduce((acc, cur) => acc+(cur*cur), 0)//need to give intial as 0 else 3 will be initial
    let sn = 0
    let sqn = 0
    for (let i = 0; i < array.length; i++) {
        sn+=array[i]
        sqn+=array[i]*array[i]
    }
    let h = s-sn //x-y

    let m = sq-sqn //x²+y² = (x+y)(x-y)
    let g = m/h //(x+y) = (x²+y²)/(x-y)
    //how do i do quadratic equations here
    //ok so i would have to preclculate the remaining values and then find it
    //like 
    //x+y=g
    //+
    //x-y=h
    //2x = g+h
    let x = (g+h)/2
    let y = g-x
    //but like how do i know which is which?
    return [x, y]
}
console.log(missing_and_repeating_number([3,1,2,5,3]));
