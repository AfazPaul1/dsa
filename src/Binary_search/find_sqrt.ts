function find_sqrt(N:number) {
    //like i cant use a for loop cause i would have to know how long it would run for
    //but here we dont know that //ok actually there is a max value which we can use to loop which is the number itself
    //so we keep incrementing and if at some value the square becomes bigger than n we exit
    let cand = 1
    let sq = 1
    while(sq <= N) {
        cand++
        sq = cand*cand
    }
    return cand-1
    
}
console.log(find_sqrt(36));//6
console.log(find_sqrt(28));//5
