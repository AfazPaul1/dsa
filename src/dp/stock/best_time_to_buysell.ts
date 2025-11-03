function best_time_to_buysell(array) {
    let max_profit = 0
    let min = array[0];
    let sell = 0
    for (let i = 1; i < array.length; i++) {
        //min = Math.min(min, array[i])//we cant do this cause this would mean we are buying and selling on the same day at i=1 like when i = 1, array[1] which is 1 is our selling price if we immediately update min to 1 that would mean our buying price too is 1. only after we have processed it as a selling price do we consider it as a buying price. this doesnt apply to the first value in the array tho cause we have to buy to sell
        let cost = array[i] - min
        if( cost >  max_profit){
            max_profit = cost
            sell = array[i]
        }
        min = Math.min(min, array[i])
    }
    return [max_profit, min, sell]
}
console.log(best_time_to_buysell([7,1,5,3,6,4]));
console.log(best_time_to_buysell([1, 7, 5,3,6,4]));
