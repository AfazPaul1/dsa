function best_time_to_buysell(array) {
    let max_profit = 0
    let buy = 0
    let sell = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <= i-1; j++) {
            let cost = array[i] - array[j]
            if( cost >  max_profit){
                max_profit = cost
                buy = array[j]
                sell = array[i]
            } 
        }
    }
    return [max_profit, buy, sell]
}
console.log(best_time_to_buysell([7,1,5,3,6,4]));
